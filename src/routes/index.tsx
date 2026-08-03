import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, User } from "lucide-react";

import { MichiBrand, MichiShell } from "@/components/MichiBrand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michi Rewards — Elige tu rol" },
      {
        name: "description",
        content:
          "Entra a Michi Rewards como comerciante o consumidor y convierte cada compra en MichiCoins.",
      },
      { property: "og:title", content: "Michi Rewards — Elige tu rol" },
      {
        property: "og:description",
        content: "Entra a Michi Rewards como comerciante o consumidor.",
      },
    ],
  }),
  component: RoleSelect,
});

function RoleSelect() {
  return (
    <MichiShell>
      <MichiBrand />

      <section
        aria-labelledby="rol-title"
        className="mt-6 rounded-xl bg-brand-soft p-4 sm:p-5"
      >
        <h2 id="rol-title" className="font-display text-sm font-semibold">
          ¿Qué rol te pertenece?
        </h2>
        <div className="mt-3 space-y-3">
          <Link
            to="/conectar"
            search={{ rol: "comerciante" }}
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Store className="size-4" aria-hidden="true" />
            Comerciante
          </Link>
          <Link
            to="/conectar"
            search={{ rol: "consumidor" }}
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand/40 bg-card px-4 py-3 text-sm font-semibold text-brand-strong transition-colors hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <User className="size-4" aria-hidden="true" />
            Consumidor
          </Link>
        </div>
      </section>
    </MichiShell>
  );
}
