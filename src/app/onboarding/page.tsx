"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nextSteps = [
  { num: "1", title: "Remplissez le formulaire initial de votre dossier" },
  { num: "2", title: "Téléchargez vos contrats, relevés et preuves" },
  { num: "3", title: "Notre IA analyse votre dossier sous 72h" },
  { num: "4", title: "Recevez votre rapport et choisissez la suite" },
];

export default function OnboardingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent-green/15 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#26D07C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
            Votre dossier est ouvert !
          </h1>
          <p className="text-base md:text-lg text-text-body max-w-xl mx-auto mb-14">
            Bienvenue chez Droit Habitat. Votre espace personnel est prêt et sécurisé.
          </p>

          <div className="text-left mb-14">
            <h2 className="text-xl font-bold text-text-primary mb-6 text-center">Prochaines étapes</h2>
            <div className="space-y-4 max-w-lg mx-auto">
              {nextSteps.map((s) => (
                <div key={s.num} className="flex items-center gap-4 rounded-2xl bg-background-muted border border-accent-slate/10 p-5 transition-all duration-200 hover:border-accent-slate/20">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-greenStrong font-bold text-sm shrink-0">
                    {s.num}
                  </div>
                  <p className="text-sm font-medium text-text-primary">{s.title}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/auth/login"
            className="inline-block px-8 py-4 rounded-full bg-accent-green text-text-primary font-bold shadow-lg shadow-accent-green/20 transition-all duration-300 hover:bg-accent-greenStrong hover:scale-105 hover:-translate-y-0.5"
          >
            Accéder à mon espace
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
