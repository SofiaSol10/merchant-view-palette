import { createFileRoute, Link } from "@tanstack/react-router";
import { CatIcon as Cat, Mail } from "lucide-react";

import { MichiShell } from "@/components/MichiBrand";

export const Route = createFileRoute("/aviso")({
  head: () => ({
    meta: [
      { title: "Aviso para comercios — Michi Rewards" },
      {
        name: "description",
        content:
          "Tu wallet aún no está registrada como comercio en Michi Rewards. Contáctanos para obtener la autorización.",
      },
      { property: "og:title", content: "Aviso para comercios — Michi Rewards" },
      {
        property: "og:description",
        content: "Tu wallet aún no está registrada como comercio en Michi Rewards.",
      },
    ],
  }),
  component: MerchantNotice,
});

function MerchantNotice() {
  return (
    <MichiShell>
      <div className="text-center">
        <span
          aria-hidden="true"
          className="inline-grid size-14 place-items-center rounded-full bg-muted text-muted-foreground"
        >
          <Cat className="size-7" />
        </span>
        <h1 className="font-display mt-4 text-2xl font-bold text-brand-strong">
          Aviso para comercios
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Tu billetera conectada no está registrada como comercio en este contrato. Se requiere la
          autorización de Michi Rewards.
        </p>

        <a
          href="mailto:hola@michirewards.com"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Mail className="size-4" aria-hidden="true" />
          Contactar
        </a>

        <p className="mt-4 text-sm">
          <Link
            to="/"
            className="rounded text-muted-foreground underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Volver al inicio
          </Link>
        </p>
      </div>
    </MichiShell>
  );
}
