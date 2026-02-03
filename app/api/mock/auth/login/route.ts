import { NextResponse } from "next/server";
import { mockDelay } from "@/lib/mock-delay";
import type { AuthResponse, User } from "@/lib/types/api";

export async function POST() {
    await mockDelay(500, 1000);

    const user: User = {
        id: "user_123",
        email: "demo@antinode.dev",
        name: "Demo User",
        plan: "starter",
    };

    const response: AuthResponse = {
        user,
        token: "mock_jwt_token_12345",
    };

    return NextResponse.json(response);
}
