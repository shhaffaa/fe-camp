import Hero from "../components/Hero";

export default function Home() {
  document.title = "fe-camp - Toko Peralatan Hiking";
  return (
    <>
      <Hero />
      <section className="home__section">
        <h2>Produk Unggulan</h2>
        <p>Lihat katalog lengkap di <a href="/shop">Shop</a>.</p>
      </section>
    </>
  );
}
