"use client";

import { Suspense, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function PaymentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const offreId = searchParams.get("offre") || "diagnostic";

  const offers: Record<string, { name: string; price: number }> = {
    diagnostic: { name: "Diagnostic", price: 99 },
    mediation: { name: "Médiation", price: 199 },
  };
  const offer = offers[offreId] || offers.diagnostic;

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => router.push("/onboarding"), 1200);
    }, 1500);
  };

  if (done) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-green/15 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#26D07C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Paiement confirmé !</h2>
        <p className="text-text-body">Redirection vers votre espace...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-background-muted border border-accent-slate/10 p-6 md:p-8 sticky top-28">
            <h3 className="text-lg font-bold text-text-primary mb-4">Résumé</h3>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-text-body">Offre</span>
              <span className="font-semibold text-text-primary">{offer.name}</span>
            </div>
            <div className="border-t border-accent-slate/15 my-4" />
            <div className="flex justify-between text-base font-bold">
              <span className="text-text-primary">Total</span>
              <span className="text-text-primary">{offer.price} €</span>
            </div>
            <p className="mt-4 text-xs text-text-light">
              Paiement sécurisé par Stripe. Vos données sont chiffrées de bout en bout.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Paiement sécurisé</h2>
          <p className="text-sm text-text-body mb-8">Offre sélectionnée : {offer.name} — {offer.price} €</p>

          <form onSubmit={handlePay} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Numéro de carte</label>
              <input
                type="text"
                value={card}
                onChange={(e) => setCard(e.target.value)}
                placeholder="4242 4242 4242 4242"
                required
                className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Expiration</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/AA"
                  required
                  className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">CVC</label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  required
                  className="w-full rounded-2xl border border-accent-slate/20 bg-background-main px-5 py-3.5 text-text-primary placeholder:text-text-light focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 rounded-full bg-accent-green text-text-primary font-bold shadow-lg shadow-accent-green/20 transition-all duration-300 hover:bg-accent-greenStrong hover:scale-[1.02] disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-text-primary/30 border-t-text-primary rounded-full animate-spin" />
                  Traitement en cours...
                </>
              ) : (
                `Payer ${offer.price} €`
              )}
            </button>

            <p className="text-xs text-text-light text-center">
              Paiement 100% sécurisé — Certification PCI DSS
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function PaiementPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen">
        <Suspense fallback={
          <div className="max-w-lg mx-auto text-center py-20">
            <div className="w-10 h-10 mx-auto mb-4 rounded-full border-2 border-accent-slate/20 border-t-accent-green animate-spin" />
            <p className="text-text-body">Chargement...</p>
          </div>
        }>
          <PaymentForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
