// src/components/Hero.tsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">FE-Camp • Vite + React + TS</p>

          <h1 id="hero-title" className="hero__title">
            Bangun UI cepat, terukur, dan aksesibel
          </h1>

          <p className="hero__sub">
            Dari scaffold, routing, sampai deploy Vercel—catatan progres yang
            bisa direplikasi dan di-audit Lighthouse.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary" to="/post" aria-label="Buka halaman catatan progres FE-Camp">
              Lihat catatan progres
            </Link>
            <a
              className="btn btn--ghost"
              href="https://github.com/shhaffaa/fe-camp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka repositori GitHub FE-Camp di tab baru"
            >
              Lihat repo GitHub
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img
            src="/og.png"              /* boleh ganti ke /hero.webp 1200×630 */
            alt=""
            width="560"
            height="315"
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: "16 / 9" }}
          />
        </div>
      </div>
    </section>
  );
}
