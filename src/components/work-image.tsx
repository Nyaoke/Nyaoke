"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PLACEHOLDER = "/work/_placeholder.svg";

interface WorkImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function WorkImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: WorkImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setImgSrc(PLACEHOLDER)}
    />
  );
}

interface WorkImageContainerProps extends WorkImageProps {
  containerClassName?: string;
  aspectRatio?: string;
}

export function WorkImageContainer({
  containerClassName,
  aspectRatio,
  className,
  ...props
}: WorkImageContainerProps) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-subtle",
        aspectRatio,
        containerClassName
      )}
    >
      <WorkImage
        {...props}
        className={cn("h-full w-full object-cover", className)}
      />
    </div>
  );
}
