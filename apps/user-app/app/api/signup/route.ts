import db from "@repo/db/client";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const existingUser = await db.user.findFirst({
      where: {
        number: body.number,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User existed Already",
        },
        {
          status: 409,
        }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      {
        status: 500,
      }
    );
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  try {
    const user = await db.user.create({
      data: {
        number: body.number,
        email: body.email,
        password: hashedPassword,
        name: body.name,
      },
    });

    return NextResponse.json(
      {
        message: "success",
        user: user,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Signup failed",
        e: e,
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = async () => {
  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
};
