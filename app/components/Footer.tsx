"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-gray-300 py-10 px-6 mt-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold text-white">Aura Crafts</h2>
          <p className="text-sm mt-2">
            უნიკალური ხელნაკეთი ნივთები გულით შექმნილი ❤️
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">ლინკები</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                მთავარი
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                გალერეა
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ჩვენს შესახებ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                კონტაქტი
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            სოციალური ქსელები
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Etsy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Aura Crafts — ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}
