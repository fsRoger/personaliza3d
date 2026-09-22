"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/#segmentos", label: "Soluções" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Como funciona" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "Dúvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-plate/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Personaliza3D, página inicial">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-ink-2 transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#orcamento"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Pedir orçamento
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="border-t border-ink/10 bg-plate px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-ink">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#orcamento"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-ink px-5 py-3 text-center font-semibold text-white"
          >
            Pedir orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
