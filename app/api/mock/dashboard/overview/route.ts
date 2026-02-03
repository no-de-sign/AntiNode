import { NextResponse } from "next/server";
import { mockDelay } from "@/lib/mock-delay";
import type { DashboardOverview } from "@/lib/types/api";

export async function GET() {
    await mockDelay();

    const overview: DashboardOverview = {
        plan: {
            name: "Starter Plan",
            tier: "starter",
        },
        usage: {
            apps: {
                label: "Apps",
                current: 3,
                limit: 10,
                unit: "apps",
            },
            domains: {
                label: "Domains",
                current: 2,
                limit: 5,
                unit: "domains",
            },
            databases: {
                label: "Databases",
                current: 1,
                limit: 3,
                unit: "databases",
            },
            disk: {
                label: "Disk Space",
                current: 1.2,
                limit: 5,
                unit: "GB",
            },
        },
    };

    return NextResponse.json(overview);
}
