import { Navigation } from "@/components/navigation";
import { AuthGuard } from "@/components/auth-guard";

export default function DashboardPage() {
    return (
        <AuthGuard>
            <div className="flex min-h-screen flex-col bg-black text-white">
                <Navigation />
                <main className="flex-1 p-6">
                    <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
                    <p className="text-zinc-400">Dashboard content coming soon...</p>
                </main>
            </div>
        </AuthGuard>
    );
}
