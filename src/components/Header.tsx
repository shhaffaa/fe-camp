// src/components/Header.tsx
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // ESC menutup menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Kunci scroll & nonaktifkan fokus ke background saat menu terbuka
  useEffect(() => {
    const main = document.querySelector("#main");
    if (open) {
      main?.setAttribute("inert", "");
      document.body.style.overflow = "hidden";
    } else {
      main?.removeAttribute("inert");
      document.body.style.overflow = "";
    }
  }, [open]);

  // Focus trap dalam menu saat terbuka
  const onTrapTab = (e: React.KeyboardEvent) => {
    if (!open || e.key !== "Tab") return;
    const nodes = menuRef.current?.querySelectorAll<HTMLElement>("a,button") || [];
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <div className="container">
        <NavLink to="/" className="brand" aria-label="Halaman depan FE Camp">FE Camp</NavLink>
        <nav aria-label="Situs utama">
          <button
            ref={btnRef}
            className="menu-button"
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen(v => !v)}
          >
            <span aria-hidden="true">☰</span>
            <span className="sr-only">{open ? "Tutup" : "Buka"} menu</span>
          </button>

          <div
            id="main-menu"
            ref={menuRef}
            className={`menu ${open ? "open" : ""}`}
            onKeyDown={onTrapTab}
            role="dialog"
            aria-modal="true"
          >
          <ul>
            <li><NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/post" onClick={() => setOpen(false)}>Post</NavLink></li>
          </ul>


          </div>
        </nav>
      </div>
    </header>
  );
}
