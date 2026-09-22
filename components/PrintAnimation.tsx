"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const BED_Y = 232;
const LAYER = 5;
const LAYER_MS = 70;
const HOLD_MS = 2600;

type Piece = {
  id: string;
  label: string;
  audience: string;
  color: string;
  top: number;
  clip: ReactNode;
  engrave?: ReactNode;
};

// Silhuetas frontais (viewBox 320x270). Cada uma representa um segmento.
const pieces: Piece[] = [
  {
    id: "placa",
    label: "Placa de mesa com nome",
    audience: "Escritórios de advocacia",
    color: "#2f4bff",
    top: 150,
    clip: <path d="M70 232 L250 232 L232 150 L88 150 Z" />,
    engrave: (
      <>
        <text x="160" y="190" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="var(--font-display)">
          Dra. Helena Prado
        </text>
        <text x="160" y="210" textAnchor="middle" fontSize="9" fill="#fff" opacity="0.8" fontFamily="var(--font-sans)">
          Prado Advocacia
        </text>
      </>
    ),
  },
  {
    id: "secador",
    label: "Suporte de parede para secador",
    audience: "Salões e barbearias",
    color: "#e0901a",
    top: 104,
    clip: (
      <>
        <rect x="96" y="200" width="128" height="32" rx="6" />
        <path
          clipRule="evenodd"
          d="M160 104a50 50 0 1 1 0 100a50 50 0 1 1 0-100Z M160 120a34 34 0 1 0 0 68a34 34 0 1 0 0-68Z"
        />
      </>
    ),
    engrave: (
      <text x="160" y="222" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="var(--font-display)">
        STUDIO LUME
      </text>
    ),
  },
  {
    id: "esp32",
    label: "Caixa para ESP32 com ventilação",
    audience: "Automação e eletrônica",
    color: "#0e9e9a",
    top: 140,
    clip: (
      <>
        <path
          clipRule="evenodd"
          d="M90 232 H230 V150 H90 Z M106 170 H214 V176 H106 Z M106 184 H214 V190 H106 Z M106 198 H214 V204 H106 Z M200 214 H216 V224 H200 Z"
        />
        <rect x="84" y="140" width="152" height="12" rx="3" />
      </>
    ),
  },
  {
    id: "rotativa",
    label: "Suporte para máquina rotativa",
    audience: "Estúdios de tatuagem",
    color: "#7c5cff",
    top: 96,
    clip: (
      <>
        <rect x="84" y="216" width="152" height="16" rx="4" />
        <rect x="152" y="138" width="16" height="80" />
        <path clipRule="evenodd" d="M116 96 H204 V142 H116 Z M132 96 H188 V128 H132 Z" />
      </>
    ),
    engrave: (
      <text x="160" y="228" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="var(--font-display)">
        TINTA VIVA
      </text>
    ),
  },
];

export default function PrintAnimation() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [layer, setLayer] = useState(0);

  const piece = pieces[idx];
  const total = Math.ceil((BED_Y - piece.top) / LAYER);
  const done = reduce || layer >= total;
  const shown = reduce ? total : layer;

  useEffect(() => {
    if (reduce) return;
    if (layer < total) {
      const t = setTimeout(() => setLayer((l) => l + 1), LAYER_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLayer(0);
      setIdx((i) => (i + 1) % pieces.length);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [layer, total, reduce]);

  const nozzleY = done ? 44 : BED_Y - shown * LAYER - 3;

  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-bed shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="plate-grid-dark absolute inset-0" />
        <svg viewBox="0 0 320 270" className="relative block w-full" role="img" aria-label={`Impressora 3D produzindo: ${piece.label}`}>
          <defs>
            <clipPath id={`clip-${piece.id}`}>{piece.clip}</clipPath>
            <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Estrutura */}
          <line x1="28" y1="18" x2="28" y2="244" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="4" strokeLinecap="round" />
          <line x1="292" y1="18" x2="292" y2="244" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="4" strokeLinecap="round" />

          {/* Mesa */}
          <rect x="40" y={BED_Y} width="240" height="8" rx="2" fill="#3a4266" />
          <rect x="40" y={BED_Y + 8} width="240" height="3" rx="1.5" fill="#000" opacity="0.25" />

          {/* Peça */}
          <g clipPath={`url(#clip-${piece.id})`}>
            {Array.from({ length: shown }).map((_, i) => (
              <rect
                key={i}
                x="40"
                y={BED_Y - (i + 1) * LAYER}
                width="240"
                height={LAYER}
                fill={piece.color}
                opacity={i % 2 ? 0.9 : 1}
              />
            ))}
            {!done && shown > 0 && (
              <rect x="40" y={BED_Y - shown * LAYER} width="240" height={LAYER} fill="url(#glow)" />
            )}
            <AnimatePresence>
              {done && piece.engrave && (
                <motion.g key={piece.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  {piece.engrave}
                </motion.g>
              )}
            </AnimatePresence>
          </g>

          {/* Eixo X */}
          <g style={{ transform: `translateY(${nozzleY - 26}px)`, transition: `transform ${done ? 600 : LAYER_MS}ms ease-out` }}>
            <rect x="24" y="0" width="272" height="6" rx="3" fill="#ffffff" opacity="0.18" />
          </g>

          {/* Bico */}
          <g style={{ transform: `translate(70px, ${nozzleY}px)`, transition: `transform ${done ? 600 : LAYER_MS}ms ease-out` }}>
            <g className={done ? "" : "nozzle-sweep"}>
              <rect x="-14" y="-30" width="28" height="18" rx="4" fill="#e6e8f0" />
              <rect x="-14" y="-30" width="28" height="5" rx="2" fill="#ffffff" />
              <path d="M-6 -12 L6 -12 L1.5 -2 L-1.5 -2 Z" fill="#c9a24a" />
              {!done && <circle cx="0" cy="0" r="3" fill={piece.color} opacity="0.9" />}
            </g>
          </g>
        </svg>
      </div>

      <figcaption className="mt-5 flex min-h-12 items-start justify-between gap-4 text-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={piece.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <p className="flex items-center gap-2 font-semibold text-white">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: piece.color }} />
              {piece.label}
            </p>
            <p className="mt-1 text-white/55">{piece.audience}</p>
          </motion.div>
        </AnimatePresence>
        <p className="shrink-0 tabular-nums text-white/55" aria-live="off">
          {done ? "Pronta" : `Camada ${shown} de ${total}`}
        </p>
      </figcaption>
    </figure>
  );
}
