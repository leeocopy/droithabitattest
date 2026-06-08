"use client";

import Link from "next/link";

interface SolutionSectionProps {
  onStartForm?: () => void;
  onStartChat?: () => void;
  children?: React.ReactNode;
}

export default function SolutionSection({ onStartForm, onStartChat, children }: SolutionSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-background-main relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Texte centré */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-text-primary mb-6 leading-snug max-w-3xl mx-auto">
            Votre solution en 2 minutes
          </h2>
          <p className="text-base md:text-lg text-text-body leading-relaxed max-w-2xl mx-auto mb-8">
            Notre test gratuit analyse instantanément votre dossier et vous dit si vous pouvez récupérer vos droits. Gratuit, sans engagement, 100% en ligne.
          </p>

          {/* Bouton */}
          <div className="flex justify-center mt-6">
            {onStartChat && (
              <button
                onClick={onStartChat}
                className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl rounded-full bg-white border-2 border-accent-green text-accent-greenStrong font-extrabold shadow-xl shadow-accent-green/10 transition-all duration-300 hover:bg-accent-green/10 hover:scale-105 hover:-translate-y-1"
              >
                Test interactif
                <svg className="ml-3 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        {children}
      </div>

      {/* Image élargie */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-4 md:mt-8">
        <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(34,50,75,0.12)]">
          <img
            src="/photo/Gemini_Generated_Image_6z87n86z87n86z87.png"
            alt="Solution Droit Habitat"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
