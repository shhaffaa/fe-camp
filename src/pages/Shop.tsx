import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Shop() {
  document.title = "Shop — FE Camp Hiking";
  return (
    <>
      <section className="hero hero--shop" aria-labelledby="shop-hero-title">
        <div className="hero__container">
          <div className="hero__content">
            <p className="hero__eyebrow">Toko Peralatan Hiking</p>
            <h1 id="shop-hero-title" className="hero__title">Siap Naik Gunung? Lengkapi Gear-mu</h1>
            <p className="hero__sub">Keril, tenda, sepatu, apparel, dan aksesori untuk trek Nusantara.</p>
            <a className="btn btn--primary" href="#catalog">Lihat katalog</a>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <img src="/hero.webp" alt="" width="1200" height="630" loading="lazy" decoding="async" style={{aspectRatio:"1200/630"}} />
          </div>
        </div>
      </section>

      <section id="catalog" className="shop">
        <div className="shop__head">
          <h2>Katalog Produk</h2>
        </div>
        <div className="grid">
          {products.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
