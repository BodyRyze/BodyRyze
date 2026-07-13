"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBg({
  src,
  className = "",
  speed = 0.15,
}: {
  src: string;
  className?: string;
  speed?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;
      const rect = outer.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      inner.style.transform = `translateY(${centerOffset * speed}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={innerRef}
        className="absolute -inset-y-24 inset-x-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')`, willChange: "transform" }}
      />
    </div>
  );
}
