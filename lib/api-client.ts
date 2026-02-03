const USE_MOCK_API = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

export class ApiClient {
    private static getBaseUrl(path: string): string {
        if (USE_MOCK_API) {
            return `/api/mock${path}`;
        }
        return `/api/v1${path}`;
    }

    static async get<T>(path: string): Promise<T> {
        const url = this.getBaseUrl(path);
        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                ...(typeof window !== "undefined" && {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                }),
            },
        });

        if (!res.ok) {
            throw new Error(`API Error: ${res.statusText}`);
        }

        return res.json();
    }

    static async post<T>(path: string, body: any): Promise<T> {
        const url = this.getBaseUrl(path);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(typeof window !== "undefined" && {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                }),
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            throw new Error(`API Error: ${res.statusText}`);
        }

        return res.json();
    }
}
