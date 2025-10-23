import { Link } from "react-router-dom";
export default function NotFound() {
  document.title = "404 — Halaman tidak ditemukan";
  return (
    <>
      <h1>Halaman tidak ditemukan</h1>
      <p>Kembali ke <Link to="/">beranda</Link>.</p>
    </>
  );
}

