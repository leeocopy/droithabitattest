"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-muted border border-accent-slate/20 text-text-body text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
            </span>
            DroitHabitat est maintenant disponible
          </div>

          <h1 className="hero-animate text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1] max-w-4xl">
            Votre partenaire
            <br />
            <span className="text-accent-green">immobilier</span> intelligent
          </h1>

          <p className="hero-animate mt-6 text-base md:text-lg font-normal leading-relaxed text-text-body max-w-2xl">
            DroitHabitat révolutionne votre expérience immobilière avec des outils
            modernes, un accompagnement expert et des solutions sur mesure pour
            chaque projet.
          </p>

          <div className="hero-animate mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-accent-green text-text-primary font-bold shadow-lg shadow-accent-green/20 transition-all duration-300 hover:bg-accent-greenStrong hover:scale-105 hover:-translate-y-0.5"
            >
              Démarrer gratuitement
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-background-main/80 text-text-primary font-semibold border border-accent-slate/30 shadow-sm transition-all duration-300 hover:bg-background-main hover:shadow-md"
            >
              Voir la démo
            </a>
          </div>

          {/* Dashboard Preview Card */}
          <div className="hero-animate mt-16 w-full max-w-5xl">
            <div className="relative rounded-3xl border border-accent-slate/15 bg-surface-glass backdrop-blur-xl shadow-[0_24px_80px_rgba(34,50,75,0.12)] overflow-hidden p-2">
              <div className="rounded-2xl bg-background-main border border-accent-slate/10 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-accent-slate/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-accent-red-muted/40" />
                    <div className="w-3 h-3 rounded-full bg-accent-slate/40" />
                    <div className="w-3 h-3 rounded-full bg-accent-green/40" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="max-w-md mx-auto rounded-lg bg-background-muted px-3 py-1.5 text-xs text-text-body/60 text-center">
                      droithabitat.ai/dashboard
                    </div>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 rounded-2xl bg-background-muted p-6 border border-accent-slate/10">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-sm text-text-body">Valeur du portefeuille</p>
                          <p className="text-3xl font-bold text-text-primary mt-1">2.4M €</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent-green/15 text-accent-greenStrong text-sm font-semibold">
                          +12.5%
                        </span>
                      </div>
                      <div className="h-32 flex items-end gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-md bg-accent-green/20 hover:bg-accent-green/40 transition-colors"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl bg-surface-dark p-6 text-text-white border border-white/10">
                      <p className="text-sm text-text-light">Propriétés gérées</p>
                      <p className="text-3xl font-bold mt-1">47</p>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center text-accent-green text-xs font-bold">
                            R
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Résidentiel</p>
                            <p className="text-xs text-text-light">32 unités</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent-slate/20 flex items-center justify-center text-accent-slate text-xs font-bold">
                            C
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Commercial</p>
                            <p className="text-xs text-text-light">15 unités</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-background-muted p-5 border border-accent-slate/10">
                      <p className="text-sm text-text-body">Transactions ce mois</p>
                      <p className="text-2xl font-bold text-text-primary mt-1">8</p>
                    </div>
                    <div className="rounded-2xl bg-background-muted p-5 border border-accent-slate/10">
                      <p className="text-sm text-text-body">Taux d'occupation</p>
                      <p className="text-2xl font-bold text-text-primary mt-1">94%</p>
                    </div>
                    <div className="rounded-2xl bg-background-muted p-5 border border-accent-slate/10">
                      <p className="text-sm text-text-body">Nouveaux leads</p>
                      <p className="text-2xl font-bold text-text-primary mt-1">23</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
