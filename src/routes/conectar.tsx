import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Smartphone, Wallet } from "lucide-react";

import { MichiBrand, MichiShell } from "@/components/MichiBrand";
import { Button } from "@/components/ui/button";

type Rol = "comerciante" | "consumidor";

export const Route = createFileRoute("/conectar")({
  validateSearch: (search: Record<string, unknown>): { rol: Rol } => ({
    rol: search["rol"] === "consumidor" ? "consumidor" : "comerciante",
  }),
  head: () => ({
    meta: [
      { title: "Conectar wallet — Michi Rewards" },
      {
        name: "description",
        content:
          "Conecta tu wallet para empezar a dar o recibir MichiCoins en Michi Rewards.",
      },
      { property: "og:title", content: "Conectar wallet — Michi Rewards" },
      {
        property: "og:description",
        content: "Conecta tu wallet para usar MichiCoins en Michi Rewards.",
      },
    ],
  }),
  component: ConnectWallet,
});

function ConnectWallet() {
  const { rol } = Route.useSearch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <MichiShell>
      <MichiBrand />

      <section aria-labelledby="wallet-title" className="mt-6 rounded-xl bg-brand-soft p-4 sm:p-5">
        <h2 id="wallet-title" className="font-display text-sm font-semibold">
          Conecta tu wallet como {rol}
        </h2>
        <Button
          className="mt-3 min-h-11 w-full"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            navigate({ to: rol === "comerciante" ? "/aviso" : "/comerciante" });
          }}
        >
          <Wallet className="size-4" aria-hidden="true" />
          {loading ? "Conectando…" : "Conectar Wallet"}
        </Button>
        <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
          <Smartphone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            No detectamos una wallet. Abre esta página desde el navegador interno de MetaMask en tu
            celular para continuar.
          </span>
        </p>
      </section>
    </MichiShell>
  );
}
