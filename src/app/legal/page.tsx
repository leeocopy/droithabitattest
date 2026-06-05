import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20 px-4 max-w-4xl mx-auto text-text-body">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-12">Mentions Légales & CGV</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-4">1. Éditeur du site</h2>
          <p className="mb-4">Le site DroitHabitat est édité par la société DroitHabitat SAS au capital de 10 000€.</p>
          <p>Siège social : 123 Rue de la République, 75001 Paris, France.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-4">2. Conditions Générales de Vente (CGV)</h2>
          <p className="mb-4">Les présentes CGV régissent l'utilisation des services de DroitHabitat, incluant le diagnostic d'éligibilité et l'accompagnement à la médiation.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Le test d'éligibilité est entièrement gratuit et sans engagement.</li>
            <li>Les services payants (ex: Médiation à 199€) sont soumis à une obligation de résultat ou remboursés selon les termes de la garantie 7 jours.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-4">3. Politique de Confidentialité</h2>
          <p className="mb-4">Vos données personnelles sont traitées de manière sécurisée et confidentielle. Nous ne revendons en aucun cas vos informations à des tiers sans votre consentement explicite.</p>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
