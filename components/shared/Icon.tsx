import {
  Apple,
  Baby,
  Clock3,
  Croissant,
  Heart,
  Languages,
  Medal,
  Puzzle,
  Salad,
  ShieldCheck,
  Soup,
  Sparkles,
  Speech,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  apple: Apple,
  baby: Baby,
  clock: Clock3,
  croissant: Croissant,
  heart: Heart,
  languages: Languages,
  medal: Medal,
  puzzle: Puzzle,
  salad: Salad,
  shield: ShieldCheck,
  soup: Soup,
  sparkles: Sparkles,
  speech: Speech,
  utensils: Utensils,
};

export function Icon({ name, className, strokeWidth = 2.2 }: { name: string; className?: string; strokeWidth?: number }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
