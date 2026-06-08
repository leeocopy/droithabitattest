import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <LandingPage />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
