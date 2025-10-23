import Hero from "../components/Hero";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Landing sederhana.</p>
    </section>
  );

  return (
    <>
      <Hero />
      <section className="home__section">
        <h2>Terbaru</h2>
        <p>Mulai dari struktur proyek, routing, sampai pengukuran Lighthouse.</p>
        <p>
          Lanjut ke <Link to="/post">halaman Post</Link> untuk detail setiap langkah.
        </p>
      </section>
    </>
  );
}
