export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    nouveau: "Nouveau",
    pieces_attendues: "Pièces attendues",
    analyse_en_cours: "Analyse en cours",
    livre: "Rapport livré",
    mediation_en_cours: "Médiation en cours",
    conciliation: "Conciliation",
    relance: "Relance",
    cloture: "Clôturé",
    archive: "Archivé",
  };
  return labels[status] || status;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    nouveau: "bg-accent-slate/20 text-text-body",
    pieces_attendues: "bg-accent-red-muted/20 text-accent-red",
    analyse_en_cours: "bg-accent-green/15 text-accent-greenStrong",
    livre: "bg-accent-green/15 text-accent-greenStrong",
    mediation_en_cours: "bg-accent-green/15 text-accent-greenStrong",
    conciliation: "bg-accent-slate/20 text-text-body",
    relance: "bg-accent-red-muted/20 text-accent-red",
    cloture: "bg-accent-slate/20 text-text-body",
    archive: "bg-accent-slate/20 text-text-body",
  };
  return colors[status] || "bg-accent-slate/20 text-text-body";
}

export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
