"use client";
import { Button } from "@/components/ui/button";
import { User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAuthModal } from "@/context/AuthModalContext";

const links = [
  { name: "მთავარი", href: "/" },
  { name: "კოლექცია/პროდუქცია", href: "/products" },
  { name: "კონტაქტი", href: "/contact" },
];

interface MobilenavProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Mobilenav({ isActive, setIsActive }: MobilenavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const { open } = useAuthModal();

  // gsap animate in/out
  useEffect(() => {
    if (!navRef.current) return;

    if (isActive) {
      gsap.to(navRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(navRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  }, [isActive]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-screen bg-gray-50/80 z-50"
      style={{ transform: "translateX(100%)", opacity: 0 }}
    >
      <ul className="absolute right-0 w-[400px] max-w-[400px] bg-gray-600 flex flex-col items-center justify-center space-y-4 h-full">
        <Button
          onClick={() => setIsActive(false)}
          className="absolute cursor-pointer right-5 top-5"
        >
          <X />
        </Button>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-white after:w-full"
                  : "text-gray-200"
              }  relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-white after:left-0 after:bottom-0`}
              onClick={() => setIsActive(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <Button onClick={open} className="cursor-pointer">
          Sign in <User />
        </Button>
      </ul>
    </nav>
  );
}
