// src/pages/Shop.tsx
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
// import { useSEO } from "../lib/seo"; // pakai jika sudah ada

export default function Shop() {
  // useSEO({ title: "Shop — FE Camp Hiking", description: "Katalog alat hiking: keril, tenda, sepatu, apparel, aksesori.", canonical: `${import.meta.env.VITE_SITE_URL}/shop` });
  document.title = "Shop — FE Camp Hiking";

  return (
    <>
      <section className="hero hero--shop" aria-labelledby="shop-hero-title">
        <div className="hero__container">
          <div className="hero__content">
            <p className="hero__eyebrow">Toko Peralatan Hiking</p>
            <h1 id="shop-hero-title" className="hero__title">Siap Naik Gunung? Lengkapi Gear-mu</h1>
            <p className="hero__sub">Keril, tenda, sepatu, dan aksesori—dipilih untuk trek Nusantara. Aksesibel, ringan, dan siap kirim.</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#catalog">Lihat katalog</a>
              <Link className="btn btn--ghost" to="/post">Baca catatan</Link>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <img src="/hero.webp" alt="" width="1200" height="630" loading="lazy" decoding="async" style={{aspectRatio:"1200/630"}} />
          </div>
        </div>
      </section>

      <section id="catalog" className="shop">
        <div className="shop__head">
          <h2>Katalog Produk</h2>
          <div className="shop__filters" aria-label="Filter katalog">
            <label>
              <span className="sr-only">Cari</span>
              <input className="input" placeholder="Cari keril, tenda, sepatu..." />
            </label>
            <select className="select" aria-label="Kategori">
              <option value="">Semua kategori</option>
              <option>Backpack</option>
              <option>Tent</option>
              <option>Footwear</option>
              <option>Apparel</option>
              <option>Accessory</option>
            </select>
            <select className="select" aria-label="Urutkan">
              <option value="pop">Terpopuler</option>
              <option value="cheap">Harga termurah</option>
              <option value="exp">Harga tertinggi</option>
              <option value="new">Terbaru</option>
            </select>
          </div>
        </div>

        <div className="grid">
          {products.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
