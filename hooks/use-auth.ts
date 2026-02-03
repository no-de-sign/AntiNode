"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ApiClient } from "@/lib/api-client";
import type { AuthResponse, User } from "@/lib/types/api";

interface AuthState {
    user: User | null;
    isLoading: boolean;
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUser(null);
            setIsLoading(false);
            return;
        }

        try {
            // For MVP, we'll assume if token exists, we fetch 'me'
            // In real app, we verify token validity
            const { user } = await ApiClient.get<{ user: User }>("/auth/me");
            setUser(user);
        } catch (error) {
            console.error("Auth check failed", error);
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string) => {
        try {
            setIsLoading(true);
            const res = await ApiClient.post<AuthResponse>("/auth/login", { email });
            localStorage.setItem("token", res.token);
            setUser(res.user);
            router.push("/dashboard");
            return true;
        } catch (error) {
            console.error("Login failed", error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        router.push("/login");
    };

    return {
        user,
        isLoading,
        login,
        logout,
        checkAuth,
    };
}
