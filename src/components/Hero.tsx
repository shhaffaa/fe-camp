import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero hero--full" aria-labelledby="hero-title">
      {/* Background dekoratif */}
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">toko peralatan hiking</p>

          <h1 id="hero-title" className="hero__title">fe-camp</h1>

          <p className="hero__sub">
            Katalog gear gunung yang ringan, fungsional, dan siap kirim.
            Mulai dari keril, tenda, sepatu, sampai aksesori.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--sun" to="/shop" aria-label="Buka halaman Shop fe-camp">Belanja sekarang</Link>
            <Link className="btn btn--ghost-light" to="/post">Lihat progres & catatan</Link>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          {/* Pakai assetmu; jika belum ada, biarkan og.png sementara */}
          <img
            src="/hero.webp"
            onError={(e)=>{(e.currentTarget as HTMLImageElement).src="/og.png";}}
            alt=""
            width={960}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
