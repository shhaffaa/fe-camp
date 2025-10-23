import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/cart";
import { useState } from "react";

function idr(v: number) {
  return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(v);
}

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const p = products.find(x => x.slug === slug);
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!p) {
    return (
      <main id="main">
        <h1>Produk tidak ditemukan</h1>
        <p>Kembali ke <Link to="/shop">Shop</Link>.</p>
      </main>
    );
  }

  return (
    <main id="main" className="pd">
      <nav aria-label="Breadcrumb" className="pd__crumbs"><Link to="/shop">Shop</Link> / {p.name}</nav>
      <div className="pd__grid">
        <div className="pd__img">
          <img src={p.image} alt={p.name} width={p.imageW} height={p.imageH} />
        </div>
        <div className="pd__info">
          <h1>{p.name}</h1>
          <p className="pd__price">{idr(p.price)}</p>
          <p>{p.description}</p>
          <div className="pd__buy">
            <label>
              <span className="sr-only">Jumlah</span>
              <input type="number" min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)||1))} className="input" style={{width:"6rem"}} />
            </label>
            <button
              className="btn btn--primary"
              onClick={() => add({ id:p.id, slug:p.slug, name:p.name, price:p.price, image:p.image }, qty)}
            >
              Tambah ke Keranjang
            </button>
          </div>
          <p><Link to="/cart" className="btn btn--ghost">Lihat Keranjang</Link></p>
        </div>
      </div>
    </main>
  );
}
