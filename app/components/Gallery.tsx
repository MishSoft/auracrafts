/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1624687943971-e86af76d57de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1751242864911-1461a0b3a2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1657603471016-b3c13c3b5ff5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1713425886176-2c618d1e63cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1713425887346-2ef9f2b67bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1657603334984-65dff4699d76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8",
];

export default function Gallery() {
  return (
    <section>
      <div className="flex items-center justify-between pl-[15px] pb-[20px] pr-[15px]">
        <h2 className="md:text-3xl text-1xl text-gray-800">გალერეა</h2>

        <Button variant={"outline"} className="cursor-pointer">
          ყველას ნახვა
          <ChevronRight />
        </Button>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl break-inside-avoid relative group"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />

            {/* OPTIONAL overlay for text or darkening on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
