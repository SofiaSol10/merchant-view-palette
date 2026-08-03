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
const WALLET = "0xamf...snf,sd";

function MerchantDashboard() {
  const [saleEmail, setSaleEmail] = useState("");
  const [saleAmount, setSaleAmount] = useState("");
  const [chargeEmail, setChargeEmail] = useState("");
  const [chargeCoins, setChargeCoins] = useState("");

  const coinsToGive = Math.floor((Number(saleAmount) || 0) * REWARD_RATE);
  const solesEquivalent = Number(chargeCoins) || 0;

  return (
    <div className="min-h-dvh bg-muted/60 font-sans">
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between sm:gap-4 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground"
            >
              <Coins className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="font-display truncate text-base font-bold leading-tight sm:text-lg">
                Michi Rewards
              </p>
              <p className="truncate text-xs text-ink-foreground/75">Panel del comerciante</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="hidden min-h-11 text-ink-foreground hover:bg-ink-foreground/15 hover:text-ink-foreground focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:inline-flex"
            >
              <Wallet className="size-4 text-brand" aria-hidden="true" />
              Retirar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Retirar MichiCoins"
              className="min-h-11 min-w-11 text-ink-foreground hover:bg-ink-foreground/15 hover:text-ink-foreground focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:hidden"
            >
              <Wallet className="size-5 text-brand" aria-hidden="true" />
            </Button>
            <button
              type="button"
              aria-label={`Cuenta de ${BUSINESS}, wallet ${WALLET}`}
              className="flex min-h-11 items-center gap-2 rounded-lg bg-ink-foreground/15 px-2.5 transition-colors hover:bg-ink-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:px-3"
            >
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground"
              >
                CC
              </span>
              <span className="hidden max-w-[130px] truncate text-xs sm:inline">{WALLET}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-5 sm:px-5 sm:py-6">
        <p
          role="status"
          className="flex items-start gap-2 rounded-xl border border-success/40 bg-success/10 px-4 py-3 text-sm font-medium text-success"
        >
          <BadgeCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>Negocio verificado — ya puedes dar y recibir MichiCoins</span>
        </p>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <h1 className="font-display text-2xl font-bold leading-tight sm:text-[1.75rem]">
              ¡Bienvenido, {BUSINESS}!
            </h1>

            <section
              aria-labelledby="saldo-title"
              className="rounded-2xl px-6 py-6 text-center text-brand-foreground sm:py-7"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
            >
              <h2
                id="saldo-title"
                className="font-display text-sm font-semibold uppercase tracking-wide"
              >
                Saldo actual
              </h2>
              <p className="font-display mt-1 text-4xl font-bold tabular-nums sm:text-5xl">
                {BALANCE.toLocaleString("es-PE")}
              </p>
              <p className="mt-1 text-sm font-medium">MichiCoin(s)</p>
              <span
                aria-hidden="true"
                className="mt-4 inline-grid size-10 place-items-center rounded-full bg-brand-foreground/25"
              >
                <Coins className="size-5" />
              </span>
            </section>

            <section
              aria-labelledby="tasa-title"
              className="rounded-2xl border border-border bg-card p-4 text-sm"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h2 id="tasa-title" className="font-display font-semibold">
                Tasa de recompensa
              </h2>
              <p className="mt-1 text-muted-foreground">
                Entregas <span className="font-semibold text-brand-strong">10%</span> del monto de cada
                venta en MichiCoins.
              </p>
            </section>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <section
              aria-labelledby="como-funciona-title"
              className="rounded-2xl border border-border bg-brand-soft/70 p-4 sm:p-5"
            >
              <h2
                id="como-funciona-title"
                className="font-display flex items-center gap-2 text-sm font-bold"
              >
                <Info className="size-4 shrink-0 text-brand-strong" aria-hidden="true" />
                ¿Cómo funcionan los MichiCoins?
              </h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-sm font-semibold">Al registrar una venta</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    El cliente gana un 10% de su compra en MichiCoins, automáticamente.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold">Al cobrar con MichiCoins</h3>
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
            </section>

            <div
              className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <form
                aria-labelledby="venta-title"
                className="space-y-4 p-5 sm:p-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-2 text-success">
                  <Receipt className="size-5 shrink-0" aria-hidden="true" />
                  <h2 id="venta-title" className="font-display text-lg font-bold">
                    Registrar una venta
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dale MichiCoins al cliente por su compra. Tasa actual: 10% del monto.
                </p>

                <div className="space-y-2">
                  <Label htmlFor="sale-email">Cliente (correo o wallet)</Label>
                  <Input
                    id="sale-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="cliente@correo.com"
                    className="min-h-11"
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
                    inputMode="decimal"
                    placeholder="ej. 50"
                    className="min-h-11"
                    aria-describedby="sale-result"
                    value={saleAmount}
                    onChange={(e) => setSaleAmount(e.target.value)}
                  />
                </div>

                <p
                  id="sale-result"
                  aria-live="polite"
                  className="flex items-center justify-between gap-3 rounded-lg bg-muted px-4 py-3 text-sm"
                >
                  <span className="text-muted-foreground">MichiCoins a dar</span>
                  <span className="font-display font-bold text-success">
                    {coinsToGive} MichiCoins
                  </span>
                </p>

                <Button type="submit" variant="success" className="min-h-11 w-full">
                  <Sparkles className="size-4" aria-hidden="true" />
                  Dar MichiCoins al cliente
                </Button>
              </form>

              <form
                aria-labelledby="cobro-title"
                className="space-y-4 border-t border-border p-5 sm:p-6 md:border-l md:border-t-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-2 text-brand-strong">
                  <QrCode className="size-5 shrink-0" aria-hidden="true" />
                  <h2 id="cobro-title" className="font-display text-lg font-bold">
                    Cobrar con MichiCoins
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  El cliente paga con sus MichiCoins. Valor fijo 1:1 con soles.
                </p>

                <div className="space-y-2">
                  <Label htmlFor="charge-email">Cliente (correo o wallet)</Label>
                  <Input
                    id="charge-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="cliente@correo.com"
                    className="min-h-11"
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
                    inputMode="numeric"
                    placeholder="ej. 50"
                    className="min-h-11"
                    aria-describedby="charge-result"
                    value={chargeCoins}
                    onChange={(e) => setChargeCoins(e.target.value)}
                  />
                </div>

                <p
                  id="charge-result"
                  aria-live="polite"
                  className="flex items-center justify-between gap-3 rounded-lg bg-brand-soft px-4 py-3 text-sm"
                >
                  <span className="text-muted-foreground">Equivale a</span>
                  <span className="font-display font-bold text-brand-strong">S/ {solesEquivalent}</span>
                </p>

                <Button type="submit" className="min-h-11 w-full">
                  <Coins className="size-4" aria-hidden="true" />
                  Recibir MichiCoins como pago
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
