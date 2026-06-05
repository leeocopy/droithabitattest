"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase";
import { DEV_FORCE_ACCESS } from "@/lib/dev-access";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/dashboard/client");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">Droit Habitat</h1>
            <p className="text-base text-text-body">Connectez-vous à votre espace sécurisé</p>
          </div>

          {DEV_FORCE_ACCESS && (
            <div className="mb-6 rounded-2xl bg-accent-green/10 border border-accent-green/20 p-4 text-sm text-text-body">
              <p className="font-semibold text-accent-greenStrong mb-1">Mode démo local actif</p>
              <p>Choisissez un espace à ouvrir :</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/dashboard/admin" className="px-3 py-1.5 rounded-lg bg-background-main border border-accent-slate/20 text-xs font-semibold hover:border-accent-green transition-colors">Admin</Link>
                <Link href="/dashboard/negotiator" className="px-3 py-1.5 rounded-lg bg-background-main border border-accent-slate/20 text-xs font-semibold hover:border-accent-green transition-colors">Négociateur</Link>
                <Link href="/dashboard/client" className="px-3 py-1.5 rounded-lg bg-background-main border border-accent-slate/20 text-xs font-semibold hover:border-accent-green transition-colors">Client avancé</Link>
                <Link href="/dashboard/client" className="px-3 py-1.5 rounded-lg bg-background-main border border-accent-slate/20 text-xs font-semibold hover:border-accent-green transition-colors">Nouveau client</Link>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.fr"
                required
                className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
              />
            </div>

            {error && (
              <div className="rounded-xl bg-accent-redMuted/10 border border-accent-red/20 px-4 py-3 text-sm text-accent-red">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 rounded-full bg-accent-green text-text-primary font-bold shadow-lg shadow-accent-green/20 transition-all duration-300 hover:bg-accent-greenStrong hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-text-body">
            Pas encore de compte ?{" "}
            <Link href="/auth/register" className="font-semibold text-accent-greenStrong hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
