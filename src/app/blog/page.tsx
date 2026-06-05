import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-8">Notre Blog</h1>
        <p className="text-lg text-text-body mb-12">Découvrez nos articles éducatifs sur le crédit à la consommation, la médiation, et vos droits.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-accent-slate/20 rounded-2xl p-6 bg-background-main hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-background-muted rounded-xl mb-4" />
              <span className="text-sm font-semibold text-accent-greenStrong mb-2 block">Droit & Consommation</span>
              <h2 className="text-xl font-bold text-text-primary mb-3">Comment se défendre face à un crédit abusif ?</h2>
              <p className="text-text-body text-sm mb-4">Comprendre les démarches et vos droits face aux banques et organismes de crédit...</p>
              <span className="text-sm text-text-light font-medium">Lire la suite &rarr;</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
