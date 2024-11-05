import { NextResponse } from "next/server";
import { db } from "../../../config/db";
import { eq } from "drizzle-orm";
import { Users } from "../../../config/schema";

export async function POST(req) {
  const { user } = await req.json();

  try {
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user.primaryEmailAddress.emailAddress));

    if (userInfo?.length == 0) {
      const saveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({ Users });
      return NextResponse.json({ result: saveResult });
    }
  } catch (error) {
    return NextResponse.json({ result: userInfo[0] });
  }
  return NextResponse.json({ result: user });
}
