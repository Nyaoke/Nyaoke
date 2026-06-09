"use client";

import Image from "next/image";
import { useState } from "react";
import { ShapeIllustration } from "@/components/shape-illustration";
import { ShapeOption } from "@/lib/filter-types";
import { cn } from "@/lib/utils";

type DiamondMediaProps = {
  imageUrl: string | null;
  shape: ShapeOption;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export function DiamondMedia({
  imageUrl,
  shape,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 50vw, 25vw",
  priority = false,
}: DiamondMediaProps) {
  const [failed, setFailed] = useState(false);

  if (!imageUrl || failed) {
    return (
      <div className={cn("flex items-center justify-center bg-neutral-100", className)}>
        <ShapeIllustration shape={shape} className="h-16 w-16 text-neutral-400" />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-neutral-100", className)}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover object-center", imageClassName)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
