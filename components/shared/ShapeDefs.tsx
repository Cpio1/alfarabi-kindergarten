/**
 * Фигурные маски (clipPath в долях от размеров элемента) — облако, фестон, волна, капля-клякса, цветок.
 * Используются через CSS-классы .clip-cloud, .clip-scallop и т.д.
 */
const f = (n: number) => n.toFixed(4);

function polar(fn: (t: number) => number, steps = 180) {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = fn(t);
    d += `${i ? "L" : "M"}${f(0.5 + r * Math.cos(t))},${f(0.5 + r * Math.sin(t))}`;
  }
  return d + "Z";
}

// фестонный круг (как печать / бейдж)
const scallop = polar((t) => 0.462 + 0.038 * Math.abs(Math.cos(7 * t)));
// цветок с мягкими лепестками
const flower = polar((t) => 0.4 + 0.1 * Math.pow(Math.abs(Math.cos(3 * t)), 0.7));

// прямоугольник с волнистыми краями и скруглёнными углами (волна затухает к углам)
function waveRect() {
  const a = 0.02; // амплитуда
  const m = 0.06; // отступ под скругление угла
  const n = 48;
  const wave = (t: number, k: number) => a * Math.sin(Math.PI * k * t) * Math.sin(Math.PI * t);
  const pts: string[] = [];
  // верх: слева направо
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push(`${f(m + t * (1 - 2 * m))},${f(a - wave(t, 6))}`);
  }
  pts.push(`Q1,0 ${f(1 - a)},${f(m)}`);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push(`L${f(1 - a + wave(t, 4))},${f(m + t * (1 - 2 * m))}`);
  }
  pts.push(`Q1,1 ${f(1 - m)},${f(1 - a)}`);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push(`L${f(1 - m - t * (1 - 2 * m))},${f(1 - a + wave(t, 6))}`);
  }
  pts.push(`Q0,1 ${f(a)},${f(1 - m)}`);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push(`L${f(a - wave(t, 4))},${f(1 - m - t * (1 - 2 * m))}`);
  }
  pts.push(`Q0,0 ${f(m)},${f(a)}`);
  return "M" + pts.join(" ").replace(/^(\S+)/, "$1") + "Z";
}

const blob =
  "M0.52,0.02 C0.72,0.01 0.9,0.12 0.97,0.3 C1.03,0.47 0.97,0.62 0.93,0.76 C0.87,0.93 0.7,1 0.52,0.99 C0.33,0.98 0.14,0.93 0.05,0.76 C-0.02,0.6 0.01,0.42 0.07,0.28 C0.15,0.1 0.32,0.03 0.52,0.02 Z";

export function ShapeDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <defs>
        <clipPath id="clip-cloud" clipPathUnits="objectBoundingBox">
          <circle cx="0.27" cy="0.4" r="0.24" />
          <circle cx="0.54" cy="0.3" r="0.28" />
          <circle cx="0.79" cy="0.43" r="0.2" />
          <circle cx="0.21" cy="0.66" r="0.2" />
          <circle cx="0.5" cy="0.68" r="0.3" />
          <circle cx="0.8" cy="0.67" r="0.2" />
          <ellipse cx="0.5" cy="0.54" rx="0.42" ry="0.3" />
        </clipPath>
        <clipPath id="clip-scallop" clipPathUnits="objectBoundingBox">
          <path d={scallop} />
        </clipPath>
        <clipPath id="clip-flower" clipPathUnits="objectBoundingBox">
          <path d={flower} />
        </clipPath>
        <clipPath id="clip-wave" clipPathUnits="objectBoundingBox">
          <path d={waveRect()} />
        </clipPath>
        <clipPath id="clip-blob" clipPathUnits="objectBoundingBox">
          <path d={blob} />
        </clipPath>
      </defs>
    </svg>
  );
}
