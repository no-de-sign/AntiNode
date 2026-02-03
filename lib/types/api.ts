// User and Auth Types
export interface User {
    id: string;
    email: string;
    name: string;
    plan: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

// Dashboard Types
export interface UsageItem {
    label: string;
    current: number;
    limit: number;
    unit: string;
}

export interface DashboardOverview {
    plan: {
        name: string;
        tier: string;
    };
    usage: {
        apps: UsageItem;
        domains: UsageItem;
        databases: UsageItem;
        disk: UsageItem;
    };
}

// App Types
export type AppStatus = "running" | "stopped" | "error" | "deploying";
export type AppFramework = "next" | "node" | "react" | "other";

export interface App {
    id: string;
    name: string;
    framework: AppFramework;
    status: AppStatus;
    domain: string;
    createdAt: string;
    updatedAt: string;
}

export interface AppsListResponse {
    apps: App[];
    total: number;
}
