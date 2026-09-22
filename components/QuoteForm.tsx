"use client";

import { useState, type FormEvent } from "react";
import { segments } from "@/lib/segments";
import { site, whatsappLink } from "@/lib/site";

const needs = [
  "Peça com a marca do meu negócio",
  "Produção em quantidade",
  "Protótipo",
  "Copiar ou consertar uma peça",
  "Ainda não sei",
];

const field =
  "mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-cobalt focus:outline-none focus:ring-4 focus:ring-cobalt/15";

export default function QuoteForm({ defaultSegment = "" }: { defaultSegment?: string }) {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    segmento: defaultSegment,
    necessidade: needs[0],
    quantidade: "",
    descricao: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: FormEvent) {
    e.preventDefault();
    const seg = segments.find((s) => s.slug === form.segmento)?.name ?? "Outro";
    const msg = [
      `Olá! Quero um orçamento na ${site.name}.`,
      `Nome: ${form.nome}`,
      form.empresa && `Empresa: ${form.empresa}`,
      `Segmento: ${seg}`,
      `Preciso de: ${form.necessidade}`,
      form.quantidade && `Quantidade: ${form.quantidade}`,
      `Detalhes: ${form.descricao}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">
        Seu nome
        <input required value={form.nome} onChange={set("nome")} className={field} autoComplete="name" />
      </label>
      <label className="text-sm font-semibold">
        Empresa ou estúdio <span className="font-normal text-ink-2">(opcional)</span>
        <input value={form.empresa} onChange={set("empresa")} className={field} autoComplete="organization" />
      </label>
      <label className="text-sm font-semibold">
        Segmento
        <select value={form.segmento} onChange={set("segmento")} className={field}>
          <option value="">Outro</option>
          {segments.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold">
        Quantidade aproximada
        <input value={form.quantidade} onChange={set("quantidade")} className={field} placeholder="Ex.: 1, 20, 150" inputMode="numeric" />
      </label>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-semibold">O que você precisa</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {needs.map((n) => (
            <label
              key={n}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-cobalt/25 ${
                form.necessidade === n ? "border-ink bg-ink text-white" : "border-ink/15 bg-white text-ink-2 hover:border-ink/40"
              }`}
            >
              <input
                type="radio"
                name="necessidade"
                value={n}
                checked={form.necessidade === n}
                onChange={set("necessidade")}
                className="sr-only"
              />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="text-sm font-semibold sm:col-span-2">
        Conte o problema que a peça precisa resolver
        <textarea
          required
          rows={4}
          value={form.descricao}
          onChange={set("descricao")}
          className={field}
          placeholder="Ex.: preciso de um suporte de parede para 3 secadores com o logo do salão."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Enviar pelo WhatsApp
        </button>
        <p className="text-sm text-ink-2" aria-live="polite">
          {sent ? "Mensagem aberta no WhatsApp. Anexe fotos ou arquivos por lá." : "Fotos e arquivos você envia na conversa."}
        </p>
      </div>
    </form>
  );
}
