import { NextResponse } from "next/server";
import { mockDelay } from "@/lib/mock-delay";
import type { User } from "@/lib/types/api";

export async function GET() {
    await mockDelay();

    const user: User = {
        id: "user_123",
        email: "demo@antinode.dev",
        name: "Demo User",
        plan: "starter",
    };

    return NextResponse.json({ user });
}
