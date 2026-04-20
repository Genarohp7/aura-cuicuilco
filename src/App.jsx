import GallerySection from "./components/GallerySection";
import SmoothScroll from "./components/SmoothScroll";
import { siteContent } from "./data/siteContent";

function App() {
  const {
    brand,
    hero,
    highlights,
    intro,
    packages,
    rentalIncludes,
    promotion,
    legal,
  } = siteContent;

  return (
    <>
      <SmoothScroll />

      <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_38%)]" />

        <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 md:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold-dark)]">
                {brand.name}
              </p>

              <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                {hero.eyebrow}
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl leading-none font-light tracking-[0.05em] md:text-7xl">
                {hero.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                {hero.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em] text-[var(--gold-dark)]">
                <span>{brand.tagline}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--gold-dark)]" />
                <span>{brand.location}</span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--gold-dark)] bg-[var(--gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f2a20] transition duration-300 hover:-translate-y-0.5"
                >
                  {hero.primaryCta}
                </a>

                <a
                  href="#paquetes"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition duration-300 hover:border-[var(--gold-dark)]"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] border border-[var(--line)]" />

              <div className="relative rounded-[2rem] border border-[var(--line)] bg-white/55 p-6 shadow-[0_20px_80px_rgba(69,56,26,0.08)] backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(227,199,106,0.22))] p-5">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dark)]">
                      Espacio
                    </p>
                    <p className="mt-3 text-2xl font-light tracking-[0.05em]">
                      Salón + jardín
                    </p>
                  </article>

                  <article className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(212,175,55,0.16))] p-5">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dark)]">
                      Capacidad
                    </p>
                    <p className="mt-3 text-2xl font-light tracking-[0.05em]">
                      Hasta 100 personas
                    </p>
                  </article>

                  <article className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(212,175,55,0.12))] p-5">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dark)]">
                      Comodidad
                    </p>
                    <p className="mt-3 text-2xl font-light tracking-[0.05em]">
                      Valet parking
                    </p>
                  </article>

                  <article className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(184,138,29,0.14))] p-5">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dark)]">
                      Experiencia
                    </p>
                    <p className="mt-3 text-2xl font-light tracking-[0.05em]">
                      Montaje con estilo
                    </p>
                  </article>
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]/70 p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold-dark)]">
                    Presencia del lugar
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Una propuesta visual limpia y fuera de lo convencional, pensada
                    para que el espacio se perciba elegante, actual y digno de una
                    visita desde el primer scroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-8 md:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white/50 p-6 backdrop-blur"
              >
                <p className="text-sm leading-6 tracking-[0.08em] text-[var(--foreground)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <GallerySection />

        <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold-dark)]">
                Esencia del lugar
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-[0.06em] md:text-5xl">
                {intro.title}
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {intro.description}
              </p>
            </div>
          </div>
        </section>

        <section id="paquetes" className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold-dark)]">
              Paquetes
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.06em] md:text-5xl">
              Opciones pensadas para distintos estilos de celebración
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="rounded-[2rem] border border-[var(--line)] bg-white/55 p-8 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold-dark)]">
                  {pkg.name}
                </p>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {pkg.note}
                </p>

                <ul className="mt-6 space-y-2">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="text-xl font-light uppercase tracking-[0.06em] md:text-2xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pkg.prices.map((price) => (
                    <div
                      key={price}
                      className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)]/80 px-4 py-4 text-sm leading-6 text-[var(--foreground)]"
                    >
                      {price}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                  {pkg.footer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-24 md:px-10 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--line)] bg-white/55 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold-dark)]">
              La renta incluye
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {rentalIncludes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface)]/90 px-4 py-2 text-sm tracking-[0.08em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--line)] bg-[#69744d] p-8 text-white shadow-[0_20px_80px_rgba(51,62,31,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/80">
              {promotion.title}
            </p>

            <h3 className="mt-4 text-2xl font-light tracking-[0.05em] md:text-3xl">
              {promotion.description}
            </h3>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-white/85">
              {promotion.conditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--foreground)] px-6 py-6 text-sm leading-7 text-white/82 md:px-8">
            {legal.map((item, index) => (
              <p key={item}>
                {index + 1}. {item}
              </p>
            ))}
          </div>
        </section>

        <section id="contacto" className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
          <div className="rounded-[2.25rem] border border-[var(--line)] bg-white/60 px-6 py-12 backdrop-blur md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold-dark)]">
              Contacto
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-light tracking-[0.06em] md:text-5xl">
              Agenda una visita y conoce Aura Cuicuilco de cerca.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
              La mejor forma de entender un lugar para eventos es vivir su ambiente.
              Aquí después conectaremos WhatsApp, ubicación y el medio de contacto final.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface)]/90 px-4 py-2 text-sm tracking-[0.08em]">
                Salón + jardín
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface)]/90 px-4 py-2 text-sm tracking-[0.08em]">
                Hasta 100 personas
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface)]/90 px-4 py-2 text-sm tracking-[0.08em]">
                Valet parking
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;