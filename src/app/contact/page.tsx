import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">Contactez-nous</h1>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Vous avez une question ou besoin d'aide avec votre dossier ? Notre équipe est à votre disposition.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-background-main border border-accent-slate/20 rounded-3xl p-8 md:p-12 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Prénom</label>
                <input type="text" className="w-full rounded-2xl border border-accent-slate/20 bg-background-muted px-5 py-3.5 focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10" placeholder="Votre prénom" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Nom</label>
                <input type="text" className="w-full rounded-2xl border border-accent-slate/20 bg-background-muted px-5 py-3.5 focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10" placeholder="Votre nom" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Email</label>
              <input type="email" className="w-full rounded-2xl border border-accent-slate/20 bg-background-muted px-5 py-3.5 focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10" placeholder="vous@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Message</label>
              <textarea rows={5} className="w-full rounded-2xl border border-accent-slate/20 bg-background-muted px-5 py-3.5 focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/10" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>
            <button type="button" className="w-full px-8 py-4 rounded-full bg-accent-green text-text-primary font-bold shadow-lg hover:bg-accent-greenStrong hover:text-white transition-all">
              Envoyer le message
            </button>
          </form>
        </div>
        
        <div className="mt-20">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
