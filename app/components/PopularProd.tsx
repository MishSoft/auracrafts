"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

const prodData = [
  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },
  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },

  {
    headImage:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    ],
    title: "შემოდგომი ელეგანტურობა",
    tags: "#ჩანთები, #ტყავი",
    description:
      "თქვენი ყოველდღიური სტილის სრულყოფილი დამატება. დამზადებულია მაღალი ხარისხის ბუნებრივი ტყავისგან...",
    price: 200,
  },
];

export default function PopularProd() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

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
    <section className="py-10 w-full ">
      <div className="flex items-center  justify-between pl-[15px] pb-[20px] pr-[15px]">
        <h2 className=" md:text-3xl text-1xl   text-gray-800">
          პოპულარული პროდუქცია
        </h2>

        <Button variant={"outline"} className=" cursor-pointer">
          ყველას ნახვა
          <ChevronRight />
        </Button>
      </div>

      <Carousel ref={paragraphRef} className="w-full   mx-auto px-4">
        <CarouselContent>
          {prodData.map((prod, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2  lg:basis-1/3 xl:basis-1/4 "
            >
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative">
                  <img
                    src={prod.headImage}
                    alt={prod.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/80 text-gray-600 text-xs px-2 py-1 rounded-full shadow-sm">
                    {prod.tags}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      {prod.title}
                    </h3>
                    <p className="text-sm text-gray-600">{prod.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-6">
                    <Button
                      className="text-sm font-medium  px-6 py-2 "
                      variant="outline"
                    >
                      კალათში დამატება
                    </Button>
                    <span className="text-lg font-bold text-gray-900">
                      ₾ {prod.price}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
