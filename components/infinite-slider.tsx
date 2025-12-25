"use client";

import React, { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = PropsWithChildren<{
  speed?: number; // base px per second
  speedOnHover?: number; // px per second when parent group is hovered
  gap?: number; // gap in px between items
  className?: string;
}>;

// Duplicates children to create a continuous marquee. Uses transform translateX animation.
export function InfiniteSlider({ speed = 40, speedOnHover, gap = 64, className, children }: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const currentSpeedRef = useRef(speed);
  const targetSpeedRef = useRef(speed);

  const items = useMemo(() => React.Children.toArray(children), [children]);
  // Create multiple sets for truly infinite scrolling (4 sets ensures seamless loop)
  const itemsMultiple = useMemo(() => {
    const sets = [];
    for (let i = 0; i < 4; i++) {
      sets.push(...items);
    }
    return sets;
  }, [items]);

  // Smoothly transition speed on hover change
  useEffect(() => {
    targetSpeedRef.current = isHovered && speedOnHover ? speedOnHover : speed;
  }, [isHovered, speedOnHover, speed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !trackRef.current) return;

    let rafId = 0;
    let x = 0;
    let last = performance.now();
    let setWidth = 0;

    // Calculate set width once the track is rendered
    const calculateSetWidth = () => {
      const track = trackRef.current!;
      if (track.scrollWidth > 0) {
        // Width of one set (total width / number of sets)
        setWidth = track.scrollWidth / 4;
      }
      return setWidth > 0;
    };

    const step = (now: number) => {
      const dt = (now - last) / 1000; // seconds
      last = now;

      // Calculate set width if not already calculated
      if (setWidth === 0) {
        if (!calculateSetWidth()) {
          rafId = requestAnimationFrame(step);
          return;
        }
      }

      // Smoothly interpolate speed change (easing factor)
      const speedDiff = targetSpeedRef.current - currentSpeedRef.current;
      const easingFactor = 0.15; // Adjust for smoother/faster transition
      currentSpeedRef.current += speedDiff * easingFactor;

      // Use the smoothly interpolated speed
      x -= currentSpeedRef.current * dt; // move left

      // Wrap around when we've moved one set width
      if (Math.abs(x) >= setWidth) {
        x = x % setWidth; // Use modulo for seamless wrapping
      }
      
      const track = trackRef.current!;
      track.style.transform = `translate3d(${x}px,0,0)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        className="flex items-center"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {itemsMultiple.map((child, idx) => (
          <div key={idx} className="shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

