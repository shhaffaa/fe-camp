import { Link } from "react-router-dom";
import { useCart } from "../context/cart";
import type { Product } from "../data/products";

function idr(v: number) {
  return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(v);
}

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <article className="pcard">
      <Link to={`/shop/${p.slug}`} className="pcard__img" aria-label={`Lihat ${p.name}`}>
        {p.badge && <span className="pcard__badge">{p.badge}</span>}
        <img src={p.image} alt={p.name} width={p.imageW} height={p.imageH} loading="lazy" decoding="async" />
      </Link>
      <div className="pcard__body">
        <h3 className="pcard__title"><Link to={`/shop/${p.slug}`}>{p.name}</Link></h3>
        <p className="pcard__price">{idr(p.price)}</p>
        <p className="pcard__desc">{p.description}</p>
        <div className="pcard__actions">
          <Link to={`/shop/${p.slug}`} className="btn btn--ghost">Detail</Link>
          <button className="btn btn--primary" onClick={() => add({ id:p.id, slug:p.slug, name:p.name, price:p.price, image:p.image })}>
            Tambah
          </button>
        </div>
      </div>
    </article>
  );
}
