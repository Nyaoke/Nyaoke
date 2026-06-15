"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProjectScreen } from "@/content/projects";

const PLACEHOLDER = "/work/_placeholder.svg";

interface LightboxProps {
  screens: ProjectScreen[];
  projectName: string;
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Lightbox({
  screens,
  projectName,
  initialIndex = 0,
  open,
  onOpenChange,
}: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [imgSrc, setImgSrc] = useState(screens[initialIndex]?.src ?? PLACEHOLDER);

  useEffect(() => {
    if (open) {
      setIndex(initialIndex);
      setImgSrc(screens[initialIndex]?.src ?? PLACEHOLDER);
    }
  }, [open, initialIndex, screens]);

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + screens.length) % screens.length;
      setIndex(wrapped);
      setImgSrc(screens[wrapped].src);
    },
    [screens]
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, index, goTo]);

  const current = screens[index];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
        <DialogTitle>
          {current?.caption ?? `${projectName} screen ${index + 1}`}
        </DialogTitle>
        <div className="relative">
          <Image
            src={imgSrc}
            alt={current?.caption ?? `${projectName} screen ${index + 1}`}
            width={1920}
            height={1080}
            className="w-full rounded-card object-contain"
            unoptimized
            onError={() => setImgSrc(PLACEHOLDER)}
          />
          {screens.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-input bg-elevated text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-input bg-elevated text-ink-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
        {current?.caption && (
          <p className="mt-2 text-center text-body-sm text-ink-secondary">
            {current.caption}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
