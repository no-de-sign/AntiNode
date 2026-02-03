import { NextResponse } from "next/server";
import { mockDelay } from "@/lib/mock-delay";
import type { AppsListResponse, App } from "@/lib/types/api";

export async function GET() {
    await mockDelay();

    const apps: App[] = [
        {
            id: "app_1",
            name: "my-blog",
            framework: "next",
            status: "running",
            domain: "my-blog.antinode.app",
            createdAt: "2026-01-15T10:00:00Z",
            updatedAt: "2026-02-01T14:30:00Z",
        },
        {
            id: "app_2",
            name: "api-server",
            framework: "node",
            status: "running",
            domain: "api-server.antinode.app",
            createdAt: "2026-01-20T11:15:00Z",
            updatedAt: "2026-02-02T09:20:00Z",
        },
        {
            id: "app_3",
            name: "portfolio",
            framework: "react",
            status: "stopped",
            domain: "portfolio.antinode.app",
            createdAt: "2026-01-25T16:45:00Z",
            updatedAt: "2026-01-28T18:10:00Z",
        },
    ];

    const response: AppsListResponse = {
        apps,
        total: apps.length,
    };

    return NextResponse.json(response);
}
