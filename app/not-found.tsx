import Link from "next/link";

export default function NotFound() {
  return (
    <main className="plate-grid flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="display text-4xl font-extrabold">Essa página não existe</h1>
      <p className="mt-4 text-ink-2">O endereço pode ter mudado. Volte para o início e escolha o seu segmento.</p>
      <Link href="/" className="mt-8 rounded-full bg-ink px-6 py-3 font-semibold text-white">
        Voltar para o início
      </Link>
    </main>
  );
}
