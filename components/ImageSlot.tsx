import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label: string;
  color?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Mostra a imagem quando `src` existe; senão, um placeholder com linhas de camada
 * na cor do segmento. Veja IMAGENS.md para os prompts de cada slot.
 */
export default function ImageSlot({ src, alt, label, color = "#2f4bff", className = "", priority }: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${color}2e, ${color}10)` }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `repeating-linear-gradient(to bottom, ${color}26 0 2px, transparent 2px 9px)` }}
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs text-ink-2">
        Imagem: {label}
      </span>
    </div>
  );
}
