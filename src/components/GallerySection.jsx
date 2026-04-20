import { useMemo, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { galleryPhotos } from "../data/galleryPhotos";

const placeholderCards = [
  {
    className: "md:col-span-2 min-h-[320px]",
    text: "Espacio listo para recibir fotos reales en distintos formatos.",
  },
  {
    className: "min-h-[320px]",
    text: "Aquí lucirán tanto fotos verticales como horizontales.",
  },
  {
    className: "min-h-[320px]",
    text: "La composición final se verá limpia, elegante y actual.",
  },
  {
    className: "md:col-span-2 min-h-[220px]",
    text: "La galería estará pensada para vender el lugar desde la primera vista.",
  },
  {
    className: "md:col-span-2 min-h-[220px]",
    text: "Sin recortes absurdos ni acomodos improvisados.",
  },
];

function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const slides = useMemo(
    () =>
      galleryPhotos.map((photo) => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
        title: photo.title,
        description: photo.description,
      })),
    []
  );

  const hasPhotos = galleryPhotos.length > 0;

  return (
    <section id="espacio" className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold-dark)]">
            Galería del espacio
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-[0.06em] md:text-5xl">
            Una presentación visual limpia, elegante y pensada para vender el lugar.
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
          Aquí vamos a lucir tanto fotos horizontales como verticales sin forzarlas a
          formatos torcidos. La idea es que el espacio se vea cuidado, actual y con
          mucha mejor presencia.
        </p>
      </div>

      {hasPhotos ? (
        <>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/50 p-4 backdrop-blur md:p-5">
            <div className="aura-gallery">
              <RowsPhotoAlbum
                photos={galleryPhotos}
                targetRowHeight={320}
                spacing={16}
                breakpoints={[480, 768, 1024, 1280]}
                sizes={{
                  size: "1168px",
                  sizes: [
                    {
                      viewport: "(max-width: 1280px)",
                      size: "calc(100vw - 80px)",
                    },
                    {
                      viewport: "(max-width: 768px)",
                      size: "calc(100vw - 48px)",
                    },
                  ],
                }}
                onClick={({ index }) => setActiveIndex(index)}
                componentsProps={{
                  container: {
                    className: "select-none",
                  },
                }}
                render={{
                  extras: (_, { photo }) => (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                          Aura Cuicuilco
                        </p>
                        <p className="mt-1 text-sm tracking-[0.06em]">
                          {photo.title || photo.alt}
                        </p>
                      </div>

                      <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 px-3 text-[10px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                        Ver
                      </span>
                    </div>
                  ),
                }}
              />
            </div>
          </div>

          <Lightbox
            open={activeIndex >= 0}
            close={() => setActiveIndex(-1)}
            index={Math.max(activeIndex, 0)}
            on={{ view: ({ index }) => setActiveIndex(index) }}
            slides={slides}
            plugins={[Captions, Thumbnails, Zoom]}
            captions={{
              showToggle: true,
              descriptionTextAlign: "start",
              descriptionMaxLines: 2,
            }}
            thumbnails={{
              position: "bottom",
              width: 96,
              height: 72,
              border: 0,
              borderRadius: 16,
              padding: 0,
              gap: 10,
              vignette: false,
            }}
            zoom={{
              maxZoomPixelRatio: 2,
              scrollToZoom: true,
            }}
            carousel={{
              padding: 0,
              spacing: "12%",
              imageFit: "contain",
            }}
            controller={{
              closeOnBackdropClick: true,
            }}
          />
        </>
      ) : (
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/55 p-5 backdrop-blur md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {placeholderCards.map((card, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(212,175,55,0.18))] ${card.className}`}
              >
                <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_56%)] p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dark)]">
                      Aura Cuicuilco
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--foreground)]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
              Siguiente conexión
            </p>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              En cuanto pongamos las 7 fotos reales, esta sección quedará funcionando
              como galería premium con vista ampliada, captions y thumbnails. Aquí no
              habrá recortes absurdos ni acomodos improvisados.
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
              Ruta sugerida: public/images/gallery/
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;