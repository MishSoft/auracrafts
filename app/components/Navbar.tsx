"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Mobilenav from "./Mobilenav";
import gsap from "gsap";

const links = [
  { name: "მთავარი", href: "/" },
  { name: "კოლექცია/პროდუქცია", href: "/products" },
  { name: "კონტაქტი", href: "/contact" },
];

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

  // refs
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const userButtonRef = useRef<HTMLButtonElement>(null);

  // animate on mount
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.out" },
    });

    tl.from(logoRef.current, { opacity: 0, y: -20 })
      .from(
        linksRef.current ? Array.from(linksRef.current.children) : [],
        {
          opacity: 0,
          y: -10,
          stagger: 0.1,
        },
        "-=0.3"
      )
      .from(userButtonRef.current, { opacity: 0, scale: 0.8 }, "-=0.4");
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex items-center justify-between p-4 text-gray-800"
    >
      <h1 ref={logoRef} className="text-[25px]">
        Auracrafts
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        <ul ref={linksRef} className="flex space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  pathName === link.href
                    ? "text-gray-800 after:w-full"
                    : "text-gray-400"
                }  relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-gray-800 after:left-0 after:bottom-0`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="hidden md:inline-flex">
          <User />
        </Button>
      </nav>

      <Button onClick={() => setIsActive(true)} className="md:hidden">
        <Menu />
      </Button>

      {/* mobile nav */}
      <Mobilenav isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
