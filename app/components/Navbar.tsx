"use client";
import Link from "next/link";
import React from "react";
import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const links = [
  { name: "მთავარი", href: "/" },
  { name: "კოლექცია/პროდუქცია", href: "/products" },
  { name: "კონტაქტი", href: "/contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className="flex items-center justify-between p-4 text-gray-800 ">
      <h1 className="text-[25px]">Auracrafts</h1>

      {/* Navigation */}

      <nav className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4">
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
        <Button>
          <User />
        </Button>
      </nav>

      <Button className="md:hidden">
        <Menu />
      </Button>
    </header>
  );
}
