"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="p-5">
      <div className="mb-5">
        <h1 ref={titleRef} className="text-[20px] md:text-[30px]">
          ჩვენს შესახებ
        </h1>
      </div>
      <h1 ref={subtitleRef} className="text-center text-[20px]">
        ოცნებიდან რეალობამდე
      </h1>
      <p
        ref={paragraphRef}
        className="md:text-[25px] text-center mt-5 leading-relaxed"
      >
        „Aura Crafts“ გაჩნდა დიდი გატაცებითა და სურვილით, რომ შეგვექმნა რაღაც
        განსაკუთრებული. ჩვენ გვჯერა, რომ ხელნაკეთ ნივთებს სული აქვს – თითოეულ
        ნამუშევარში ჩადებულია ოსტატის ენერგია, მოთმინება და სიყვარული. სწორედ ეს
        შთაგონება გვამოძრავებს, როდესაც ვქმნით ნივთებს, რომლებიც არა მხოლოდ
        ლამაზია, არამედ ატარებს საკუთარ ისტორიას და აურას. ჩვენი მიზანია, ეს
        უნიკალური სილამაზე მოგიტანოთ თქვენს სახლსა თუ ყოველდღიურობაში, რათა
        ყოველი დეტალით ისიამოვნოთ. აღმოაჩინეთ ხელოვნება, რომელიც გულიდან მოდის.
      </p>
    </section>
  );
}
