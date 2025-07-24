"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.from(paragraphRef.current, {
      opacity: 0,
      y: 40,
    }).from(
      spanRef.current,
      {
        opacity: 0,
        y: 20,
      },
      "-=0.5"
    );
  }, []);

  return (
    <section className="hero-section w-full min-h-[500px] flex items-center justify-center bg-black px-4">
      <p
        ref={paragraphRef}
        className="flex flex-col drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-center text-[20px] md:text-[40px] text-white"
      >
        „Aura Crafts“-ში გვჯერა, რომ ნამდვილი სილამაზე დეტალებში და ხელის
        შეხებაშია. თითოეული ნივთი, რომელიც ჩვენს სახელოსნოში იბადება, უნიკალური
        ისტორიის მატარებელია
        <span ref={spanRef} className="text-[16px] md:text-[20px] mt-2">
          შექმნილია სიყვარულით, თქვენთვის.
        </span>
      </p>
    </section>
  );
}
