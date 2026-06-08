"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Le test est-il vraiment gratuit ?",
    a: "Oui, et il le restera.",
  },
  {
    q: "Combien coûte une médiation ?",
    a: "Le prix vous est révélé après le test, si vous êtes éligible.",
  },
  {
    q: "Puis-je agir seul après le diagnostic ?",
    a: "Absolument. Le pack de preuves est conçu pour ça.",
  },
  {
    q: "Qu'est-ce qui rend mon dossier éligible ?",
    a: "Démarchage, vente à domicile, délais non respectés...",
  },
  {
    q: "Combien de temps dure une médiation ?",
    a: "En moyenne 3 à 6 semaines.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".faq-item", {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-text-primary">
            Questions <span className="text-accent-greenStrong">fréquentes</span>
          </h2>
        </div>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item border-b border-accent-slate/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-semibold text-text-primary text-base md:text-lg pr-4 group-hover:text-accent-greenStrong transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent-greenStrong shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="pb-6 text-text-body text-base leading-relaxed pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
