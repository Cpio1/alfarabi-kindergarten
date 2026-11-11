"use client";

import { useState } from "react";

/** Общая логика галереи: стартовая сетка, «Көбірек көрсету», полноэкранный просмотр. */
export function useGallery(images: string[], initial: number) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, initial);
  return {
    visible,
    hasMore: images.length > initial,
    hiddenCount: Math.max(0, images.length - initial),
    expanded,
    toggle: () => setExpanded((v) => !v),
    active,
    open: (i: number) => setActive(i),
    close: () => setActive(null),
    setActive,
  };
}
