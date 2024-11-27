import express from "express";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const app = express();
const PORT = 3003;
app.use(express.json());
import z from "zod";
const webhookSchema = z.object({
  token: z.string(),
  userId: z.string(),
  amount: z.string(),
});
app.post("/:bank", async (req, res) => {
  //TODO: Add zod validation here?

  const { success } = webhookSchema.safeParse({
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  });
  if (!success) {
    return res.json({
      message: "Please give correct inputs",
    });
  }

  //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
  const paymentInformation: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };
  try {
    const txn = await db.onRampTransaction.findFirst({
      where: {
        amount: Number(req.body.amount),
        userId: Number(req.body.userId),
        status: { notIn: ["Success", "Failure"] },
      },
      select: {
        id: true,
        userId: true,
        status: true,
        provider: true,
        amount: true,
        startTime: true,
      },
    });

    if (!txn) {
      res.status(411).json({
        message: "Transaction already done",
      });
    }
  } catch (e) {
    return res.status(411).json({
      message: "Error while in onramp webhook",
    });
  }
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            // You can also get this from your DB
            increment: Number(paymentInformation.amount),
          },
        },
      }),

      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    return res.json({
      message: "Captured",
    });
  } catch (e) {
    return res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
