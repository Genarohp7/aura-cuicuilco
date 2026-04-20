import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { galleryPhotos } from "../data/galleryPhotos";

const previewLayout = [
  "col-span-12 min-h-[380px] sm:min-h-[430px] lg:col-span-7 lg:row-span-2 lg:min-h-[620px]",
  "col-span-12 min-h-[230px] sm:min-h-[260px] lg:col-span-5 lg:min-h-[300px]",
  "hidden sm:block col-span-12 min-h-[230px] sm:min-h-[260px] lg:col-span-5 lg:min-h-[300px]",
  "hidden lg:block lg:col-span-3 lg:min-h-[220px]",
  "hidden lg:block lg:col-span-4 lg:min-h-[220px]",
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

  const previewPhotos = galleryPhotos.slice(0, 5);
  const totalPhotos = galleryPhotos.length;
  const extraPhotos = Math.max(totalPhotos - previewPhotos.length, 0);
  const hasPhotos = totalPhotos > 0;

  return (
    <section
      id="espacio"
      className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
    >
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold-dark)]">
            Galería del espacio
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-[0.06em] md:text-5xl">
            Una selección visual corta, elegante y pensada para lucir el lugar sin
            saturar la página.
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
            Mostramos solo una vista previa curada en la landing. El resto de las
            fotos queda disponible dentro de una galería completa, para que la
            experiencia siga sintiéndose premium y ligera.
          </p>

          {hasPhotos ? (
            <button
              type="button"
              onClick={() => setActiveIndex(0)}
              className="mt-5 inline-flex items-center justify-center rounded-full border border-[var(--gold-dark)] bg-[var(--gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f2a20] transition duration-300 hover:-translate-y-0.5"
            >
              Ver galería completa
            </button>
          ) : null}
        </div>
      </div>

      {hasPhotos ? (
        <>
          <div className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[1fr]">
            {previewPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white/60 text-left shadow-[0_18px_50px_rgba(69,56,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(69,56,26,0.12)] ${previewLayout[index]}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/72">
                    Aura Cuicuilco
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div className="max-w-[80%]">
                      <h3 className="text-lg font-light tracking-[0.05em] text-white md:text-xl">
                        {photo.title}
                      </h3>
                      <p className="mt-2 hidden text-sm leading-6 text-white/82 md:block">
                        {photo.description}
                      </p>
                    </div>

                    <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/22 bg-white/10 px-3 text-[10px] uppercase tracking-[0.24em] text-white/85 backdrop-blur">
                      Ver
                    </span>
                  </div>
                </div>

                {index === previewPhotos.length - 1 && extraPhotos > 0 ? (
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/38 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                    +{extraPhotos} más
                  </div>
                ) : null}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-[var(--line)] bg-white/55 px-5 py-5 backdrop-blur md:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
                Vista previa curada
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                En la landing se muestran solo las imágenes necesarias para mantener
                una experiencia visual limpia. La galería completa conserva todas las
                fotos del espacio.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex(0)}
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition duration-300 hover:border-[var(--gold-dark)]"
            >
              Ver todas las fotos
            </button>
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
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/55 p-6 backdrop-blur">
          <p className="text-sm leading-7 text-[var(--muted)]">
            Aquí irá una vista previa editorial de la galería. Cuando haya imágenes,
            mostraremos solo una selección breve y el resto quedará dentro del modal.
          </p>
        </div>
      )}
    </section>
  );
}

export default GallerySection;