import { NextResponse } from "next/server";
import { deleteAccessRefreshTokens } from "@/lib/actions/auth";

export async function POST() {
    await deleteAccessRefreshTokens();
    return NextResponse.json({ message: "Logged out" }, { status: 200 });
}