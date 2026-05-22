"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const DEFAULT_ADMIN_DEST = "/admin/applications";

function safeAdminRedirect(path: string | null): string {
  if (!path || !path.startsWith("/admin") || path.startsWith("/admin/login")) {
    return DEFAULT_ADMIN_DEST;
  }
  return path;
}

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const from = safeAdminRedirect(searchParams.get("from"));
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setError(data.error ?? "Login failed.");
        return;
      }
      // Full navigation so the new session cookie is sent on the next request
      window.location.assign(from);
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-lg border border-purple-light/50 bg-white p-8 shadow-sm"
      >
        <h1 className="font-serif text-2xl text-purple">Admin sign in</h1>
        <label className="block text-sm font-medium text-purple">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-purple-light/60 px-3 py-2"
            required
            autoComplete="current-password"
          />
        </label>
        {error ? (
          <p className="text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-purple py-2.5 text-sm font-medium text-white disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
        <Link href="/" className="block text-center text-sm text-teal underline">
          Home
        </Link>
      </form>
    </main>
  );
}
