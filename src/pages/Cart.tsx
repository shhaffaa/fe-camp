import { useCart } from "../context/cart";

function idr(v: number) {
  return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(v);
}

const PHONE = import.meta.env.VITE_WA_PHONE || "6281234567890"; // ganti di env Vercel nanti

export default function Cart() {
  const { items, total, count, setQty, remove, clear } = useCart();

  const waHref = (() => {
    const lines = [
      "Order FE-Camp Hiking:",
      ...items.map(i => `- ${i.qty}× ${i.name} — ${idr(i.price * i.qty)}`),
      `Total: ${idr(total)}`
    ];
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${PHONE}?text=${text}`;
  })();

  return (
    <main id="main" className="cart">
      <h1>Keranjang</h1>
      {count === 0 ? (
        <p>Keranjang kosong. Mulai belanja di <a href="/shop">Shop</a>.</p>
      ) : (
        <>
          <ul className="cart__list">
            {items.map(i => (
              <li key={i.id} className="cart__item">
                <img src={i.image} alt={i.name} width="80" height="80" />
                <div className="cart__meta">
                  <strong>{i.name}</strong>
                  <div>{idr(i.price)}</div>
                </div>
                <label className="cart__qty">
                  <span className="sr-only">Jumlah</span>
                  <input type="number" min={1} value={i.qty} onChange={e => setQty(i.id, Math.max(1, Number(e.target.value)||1))} />
                </label>
                <div className="cart__sum">{idr(i.price * i.qty)}</div>
                <button className="btn btn--ghost" onClick={() => remove(i.id)}>Hapus</button>
              </li>
            ))}
          </ul>
          <div className="cart__foot">
            <strong>Subtotal: {idr(total)}</strong>
            <div className="cart__actions">
              <button className="btn btn--ghost" onClick={clear}>Kosongkan</button>
              <a className="btn btn--primary" href={waHref} target="_blank" rel="noopener noreferrer">Checkout via WhatsApp</a>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
