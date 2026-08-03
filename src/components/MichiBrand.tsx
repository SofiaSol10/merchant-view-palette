import { Cat } from "lucide-react";

export function MichiBrand({ subtitle = "Convierte cada compra en una recompensa." }: { subtitle?: string }) {
  return (
    <div className="text-center">
      <span
        aria-hidden="true"
        className="inline-grid size-14 place-items-center rounded-full text-brand-foreground"
        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
      >
        <Cat className="size-7" />
      </span>
      <h1 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Michi Rewards</h1>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export function MichiShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-muted/60 px-4 py-10 font-sans">
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-card p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {children}
      </div>
    </main>
  );
}
