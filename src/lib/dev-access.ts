import type { Profile, Dossier } from "@/types";

export const DEV_FORCE_ACCESS = process.env.NEXT_PUBLIC_DEV_FORCE_ACCESS === "true";

export const PREVIEW_PROFILES: Profile[] = [
  {
    id: "admin-demo",
    email: "admin@droithabitat.fr",
    prenom: "Admin",
    nom: "Demo",
    role: "super_admin",
    created_at: new Date().toISOString(),
  },
  {
    id: "nego-demo",
    email: "samir.bennani@droithabitat.fr",
    prenom: "Samir",
    nom: "Bennani",
    role: "negotiator",
    created_at: new Date().toISOString(),
  },
  {
    id: "client-advanced",
    email: "nadia.alaoui@exemple.fr",
    prenom: "Nadia",
    nom: "Alaoui",
    role: "client",
    created_at: new Date().toISOString(),
  },
  {
    id: "client-new",
    email: "nouveau.client@exemple.fr",
    prenom: "Nouveau",
    nom: "Client",
    role: "client",
    created_at: new Date().toISOString(),
  },
];

export const PREVIEW_DOSSIERS: Dossier[] = [
  {
    id: "dos-001",
    user_id: "client-advanced",
    reference: "DH-2024-001",
    status: "analyse_en_cours",
    montant_total: 18500,
    nb_credits: 2,
    score: 9,
    offre: "mediation",
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "dos-002",
    user_id: "client-advanced",
    reference: "DH-2024-002",
    status: "pieces_attendues",
    montant_total: 7200,
    nb_credits: 1,
    score: 6,
    offre: "diagnostic",
    created_at: new Date(Date.now() - 14 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "dos-003",
    user_id: "nego-demo",
    reference: "DH-2024-003",
    status: "mediation_en_cours",
    montant_total: 25000,
    nb_credits: 3,
    score: 11,
    offre: "mediation",
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export function getPreviewProfile(role: string): Profile | undefined {
  return PREVIEW_PROFILES.find((p) => p.role === role);
}
