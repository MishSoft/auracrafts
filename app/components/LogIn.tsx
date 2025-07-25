"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAuthModal } from "@/context/AuthModalContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const { visible, close } = useAuthModal();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [visible]);

  if (!visible) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      gsap.to(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        onComplete: close,
      });
    }
  };

  return (
    <section
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
    >
      <Card
        ref={formRef}
        className="w-full max-w-md bg-white shadow-xl rounded-xl"
      >
        <CardHeader>
          <CardTitle className="text-center text-2xl">შესვლა</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="email">ელ. ფოსტა</label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password">პაროლი</label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full">
              შესვლა
            </Button>
            <span className="flex items-center justify-center gap-2 text-center">
              თუ არ გაქვს ექაუნთი{" "}
              <Link className="underline" href={"/register"}>
                დარეგისტრირდი აქ
              </Link>
            </span>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
