import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "DroitHabitat — Votre expert immobilier",
  description: "Découvrez DroitHabitat, votre partenaire de confiance pour l'immobilier premium et les services habitat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${raleway.variable} font-[family-name:var(--font-raleway)]`}>
        {children}
      </body>
    </html>
  );
}
