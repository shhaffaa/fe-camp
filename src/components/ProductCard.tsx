// src/components/ProductCard.tsx
import { Link } from "react-router-dom";
import type { Product } from "../data/products";

function formatIDR(v: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(v);
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="pcard">
      <Link to={`/shop/${p.slug}`} className="pcard__img" aria-label={`Lihat ${p.name}`}>
        {p.badge && <span className="pcard__badge">{p.badge}</span>}
        <img
          src={p.image}
          alt={p.name}
          width={p.imageW}
          height={p.imageH}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="pcard__body">
        <h3 className="pcard__title">
          <Link to={`/shop/${p.slug}`}>{p.name}</Link>
        </h3>
        <p className="pcard__price">{formatIDR(p.price)}</p>
        <p className="pcard__desc">{p.description}</p>
        <div className="pcard__actions">
          <Link to={`/shop/${p.slug}`} className="btn btn--primary" aria-label={`Lihat detail ${p.name}`}>Lihat</Link>
          <button className="btn btn--ghost" aria-label={`Tambah ${p.name} ke keranjang`} disabled>
            Add to cart (soon)
          </button>
        </div>
      </div>
    </article>
  );
}
