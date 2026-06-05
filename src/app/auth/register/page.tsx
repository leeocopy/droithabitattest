"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
  const router = useRouter();
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { nom, prenom, telephone, role: "client" },
        },
      });
      if (error) throw error;
      router.push("/auth/login");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur d'inscription");
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
            <p className="text-base text-text-body">Créez votre compte client sécurisé</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Prénom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Jean"
                  required
                  className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Dupont"
                  required
                  className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
                />
              </div>
            </div>
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
              <label className="block text-sm font-semibold text-text-primary mb-2">Téléphone</label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="+33 6 12 34 56 78"
                className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8 caractères minimum"
                required
                minLength={8}
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
              {loading ? "Création..." : "Créer mon compte"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-text-body">
            Déjà un compte ?{" "}
            <Link href="/auth/login" className="font-semibold text-accent-greenStrong hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
