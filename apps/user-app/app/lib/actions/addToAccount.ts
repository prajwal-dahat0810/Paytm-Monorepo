"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import axios from "axios";
import { WEB_HOOK_URL } from "../config";
const BANKS_WEBHOOK = [
  {
    name: "HDFC Bank",
    url: `${WEB_HOOK_URL}/hdfcWebhook`,
  },
  {
    name: "Axis Bank",
    url: `${WEB_HOOK_URL}/axisWebhook`,
  },
];
export async function addToAccount(
  amount: number,
  provider: string,
  token: string
) {
  const session = await getServerSession(authOptions);
  const userId: string = session?.user.id;

  // try {
  //   // await prisma.$transaction(async (tx: any) => {
  //   //   await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(userId)} FOR UPDATE`;

  //   //   await tx.balance.update({
  //   //     where: { userId: Number(userId) },
  //   //     data: { amount: { increment: amount } },
  //   //   });
  //   // });
  //   return {
  //     message: "success",
  //   };
  try {
    const hook_url = BANKS_WEBHOOK.find((x) => x.name === provider)?.url || "";
    if (hook_url === "") return { message: "Bank Service not available now" };

    const response = await axios.post(hook_url, {
      token,
      userId,
      amount: amount.toString(),
    });

    return response.data.message === "Captured"
      ? { message: "success" }
      : { message: response.data.message };
  } catch (e) {
    console.log(e);
    return { message: "Payment Failed please try after some time" };
  }
}
