"use client";
import { useEffect, useRef, useState } from "react";
import EmailField from "./components/EmailField";
import Greet from "./components/Greet";
import NameField from "./components/NameField";
import PasswordField from "./components/PasswordField";
import PopUp from "./components/PopUp";
import gsap from "gsap";

export default function Page() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const steps = ["greet", "name", "email", "password", "popup"];
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate step IN
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, [currentStep]);

  const handleNext = () => {
    if (!containerRef.current) return;

    // Animate OUT
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setCurrentStep((prev: number) => prev + 1);
      },
    });
  };

  // Auto transition for Greet
  useEffect(() => {
    if (steps[currentStep] === "greet") {
      const timeout = setTimeout(() => {
        handleNext();
      }, 1800); // 1.8 წამი Greet-ზე

      return () => clearTimeout(timeout);
    }
  }, [currentStep, steps]);

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div ref={containerRef} className="w-[400px]">
        {steps[currentStep] === "greet" && <Greet />}
        {steps[currentStep] === "name" && <NameField onNext={handleNext} />}
        {steps[currentStep] === "email" && <EmailField onNext={handleNext} />}
        {steps[currentStep] === "password" && (
          <PasswordField onNext={handleNext} />
        )}
        {steps[currentStep] === "popup" && <PopUp />}
      </div>
    </section>
  );
}
