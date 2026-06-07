import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { StarField } from "@/components/StarField";
import { SkyViewport } from "@/components/SkyViewport";
import { FestaCountdown } from "@/components/FestaCountdown";
import { LetterForm } from "@/components/LetterForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARMY Galaxy — A Letter to Seven, From Everywhere" },
      {
        name: "description",
        content:
          "A quiet sky of letters for BTS. Light a star, leave a few words, and keep them here through Festa and every June after.",
      },
      { property: "og:title", content: "ARMY Galaxy" },
      {
        property: "og:description",
        content: "A letter to seven, from everywhere.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="galaxy-bg relative min-h-screen overflow-hidden">
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "oklch(0.14 0.04 290 / 0.95)",
            color: "oklch(0.96 0.01 300)",
            border: "1px solid oklch(0.95 0.01 300 / 0.2)",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          },
        }}
      />

      <StarField />

      <main className="relative z-10">
        {/* ===== Top bar ===== */}
        <header className="flex items-center justify-between px-6 py-6 sm:px-12">
          <span
            className="text-lg tracking-wide text-foreground/85"
            style={{ fontFamily: '"Gowun Batang", serif' }}
          >
            보라해
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Vol. 01 — Festa
          </span>
        </header>

        {/* ===== Hero ===== */}
        <section className="fade-up flex flex-col items-center px-6 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            A letter to seven, from everywhere
          </p>
          <h1 className="text-glow mt-8 max-w-5xl font-serif text-6xl font-light leading-[1] tracking-tight text-foreground sm:text-8xl">
            ARMY <em className="italic">Galaxy</em>
          </h1>
          <div className="mt-10 h-px w-16 bg-foreground/30" />
          <p className="mt-10 max-w-md font-serif text-lg font-light italic leading-relaxed text-foreground/75 sm:text-xl whitespace-pre-line">
            {"Every message becomes a star. Together, we make a sky \n kept here through Festa and every June after.\n"}
          </p>

          <div className="mt-20">
            <FestaCountdown />
          </div>
        </section>

        {/* ===== I · The Sky ===== */}
        <section className="px-6 pb-20 sm:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                i · the sky
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                tap a star
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-border bg-[oklch(0.08_0.04_285)]/60 backdrop-blur-sm">
              <SkyViewport />

              {/* Corner labels */}
              <div className="pointer-events-none absolute left-4 top-4 font-sans text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
                N · 37°35′  E · 126°58′
              </div>
              <div className="pointer-events-none absolute right-4 top-4 font-sans text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
                ARMY · 2013→
              </div>
              <div className="pointer-events-none absolute bottom-4 left-4 font-sans text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
                ✦ live
              </div>
            </div>

            <p className="mt-4 text-right font-serif text-sm italic text-muted-foreground">
              hover for a name · tap for the letter
            </p>
          </div>
        </section>

        {/* ===== II · Your Letter ===== */}
        <section id="letter" className="px-6 pb-32 sm:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                ii · your letter
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                it stays forever
              </span>
            </div>

            <h2 className="mt-10 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Light a <em className="italic">star.</em>
            </h2>
            <p className="mt-4 max-w-md font-serif text-lg font-light italic leading-relaxed text-foreground/70">
              A few words, sent into the dark⟢ kept here, always.
            </p>

            <div className="mt-12">
              <LetterForm />
            </div>
          </div>
        </section>

        <footer className="border-t border-border px-6 py-10 text-center sm:px-12">
          <p className="font-serif text-sm italic text-muted-foreground">
            made with LOVE· for seven, forever
          </p>
        </footer>
      </main>
    </div>
  );
}
