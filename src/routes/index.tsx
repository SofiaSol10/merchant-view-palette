import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeCheck,
  Coins,
  Info,
  QrCode,
  Receipt,
  Sparkles,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michi Rewards — Panel del comerciante" },
      {
        name: "description",
        content:
          "Registra ventas, entrega MichiCoins y cobra con MichiCoins desde el panel de tu negocio.",
      },
      { property: "og:title", content: "Michi Rewards — Panel del comerciante" },
      {
        property: "og:description",
        content:
          "Registra ventas, entrega MichiCoins y cobra con MichiCoins desde el panel de tu negocio.",
      },
    ],
  }),
  component: MerchantDashboard,
});

const REWARD_RATE = 0.1;
const BALANCE = 2000;
const BUSINESS = "Café Central";

function MerchantDashboard() {
  const [saleEmail, setSaleEmail] = useState("");
  const [saleAmount, setSaleAmount] = useState("");
  const [chargeEmail, setChargeEmail] = useState("");
  const [chargeCoins, setChargeCoins] = useState("");

  const coinsToGive = Math.floor((Number(saleAmount) || 0) * REWARD_RATE);
  const solesEquivalent = Number(chargeCoins) || 0;

  return (
    <div className="min-h-screen bg-muted/60 font-sans">
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-brand text-brand-foreground">
              <Coins className="size-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-none">Michi Rewards</p>
              <p className="text-xs text-ink-foreground/60">Panel del comerciante</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-lg bg-ink-foreground/10 px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-foreground/20 sm:flex">
              <Wallet className="size-4 text-brand" />
              Retirar
            </button>
            <div className="flex items-center gap-2 rounded-lg bg-ink-foreground/10 px-3 py-2">
              <span className="grid size-6 place-items-center rounded-full bg-brand/90 text-[10px] font-bold text-brand-foreground">
                CC
              </span>
              <span className="max-w-[120px] truncate text-xs">0xamf...snf,sd</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-6">
        <div className="flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm font-medium text-success">
          <BadgeCheck className="size-4 shrink-0" />
          Negocio verificado — ya puedes dar y recibir MichiCoins
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-4">
            <h1 className="font-display text-2xl font-bold leading-tight">
              ¡Bienvenido,
              <br />
              {BUSINESS}!
            </h1>

            <div
              className="rounded-2xl px-6 py-7 text-center text-brand-foreground"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-wide opacity-90">
                Saldo actual
              </p>
              <p className="font-display mt-1 text-5xl font-bold tabular-nums">
                {BALANCE.toLocaleString("es-PE")}
              </p>
              <p className="mt-1 text-sm font-medium opacity-90">MichiCoin(s)</p>
              <span className="mt-4 inline-grid size-10 place-items-center rounded-full bg-brand-foreground/20">
                <Coins className="size-5" />
              </span>
            </div>

            <div
              className="rounded-2xl border border-border bg-card p-4 text-sm"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="font-display font-semibold">Tasa de recompensa</p>
              <p className="mt-1 text-muted-foreground">
                Entregas <span className="font-semibold text-brand">10%</span> del monto de cada
                venta en MichiCoins.
              </p>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-2xl border border-border bg-brand-soft/70 p-5">
              <p className="font-display flex items-center gap-2 text-sm font-bold">
                <Info className="size-4 text-brand" />
                ¿Cómo funcionan los MichiCoins?
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-display text-sm font-semibold">Al registrar una venta</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    El cliente gana un 10% de su compra en MichiCoins, automáticamente.
                  </p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">Al cobrar con MichiCoins</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    El cliente paga con sus MichiCoins — tú los recibes y luego los retiras.
                  </p>
                </div>
              </div>
              <Separator className="my-4 bg-border" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1 MichiCoin = 1 sol</span> al momento
                de pagar. Un servicio de S/50 cuesta exactamente 50 MichiCoins — nunca más caro.
              </p>
            </div>

            <div
              className="grid gap-0 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <form
                className="space-y-4 p-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-2 text-success">
                  <Receipt className="size-5" />
                  <h2 className="font-display text-lg font-bold">Registrar una venta</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dale MichiCoins al cliente por su compra. Tasa actual: 10% del monto.
                </p>

                <div className="space-y-2">
                  <Label htmlFor="sale-email">Cliente (correo o wallet)</Label>
                  <Input
                    id="sale-email"
                    placeholder="cliente@correo.com"
                    value={saleEmail}
                    onChange={(e) => setSaleEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sale-amount">Monto de la venta (S/)</Label>
                  <Input
                    id="sale-amount"
                    type="number"
                    min="0"
                    placeholder="ej. 50"
                    value={saleAmount}
                    onChange={(e) => setSaleAmount(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3 text-sm">
                  <span className="text-muted-foreground">MichiCoins a dar</span>
                  <span className="font-display font-bold text-success">
                    {coinsToGive} MichiCoins
                  </span>
                </div>

                <Button type="submit" variant="success" className="w-full">
                  <Sparkles className="size-4" />
                  Dar MichiCoins al cliente
                </Button>
              </form>

              <form
                className="space-y-4 border-t border-border p-6 md:border-l md:border-t-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-2 text-brand">
                  <QrCode className="size-5" />
                  <h2 className="font-display text-lg font-bold">Cobrar con MichiCoins</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  El cliente paga con sus MichiCoins. Valor fijo 1:1 con soles.
                </p>

                <div className="space-y-2">
                  <Label htmlFor="charge-email">Cliente (correo o wallet)</Label>
                  <Input
                    id="charge-email"
                    placeholder="cliente@correo.com"
                    value={chargeEmail}
                    onChange={(e) => setChargeEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="charge-coins">MichiCoins a cobrar</Label>
                  <Input
                    id="charge-coins"
                    type="number"
                    min="0"
                    placeholder="ej. 50"
                    value={chargeCoins}
                    onChange={(e) => setChargeCoins(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-brand-soft px-4 py-3 text-sm">
                  <span className="text-muted-foreground">Equivale a</span>
                  <span className="font-display font-bold text-brand">S/ {solesEquivalent}</span>
                </div>

                <Button type="submit" className="w-full">
                  <Coins className="size-4" />
                  Recibir MichiCoins como pago
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
