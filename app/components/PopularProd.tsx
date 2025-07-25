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
      "https://i.etsystatic.com/8421672/r/il/78b475/6308687579/il_600x600.6308687579_t44v.jpg",
    otherImages: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542068829-1115f7259450?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=60&auto=format&fit=crop",
    ],
    title: "ტყავის ზურგჩანთა",
    tags: "#ზურგჩანთა, #ტყავი, #ხელნაკეთი",
    description:
      "მოქნილი, გამძლე და ელეგანტური ხელნაკეთი ტყავის ზურგჩანთა ყოველდღიური გამოყენებისთვის.",
    price: 250,
  },
  {
    headImage:
      "https://i.etsystatic.com/57652560/r/il/0d85fb/7025925286/il_600x600.7025925286_1yge.jpg",
    otherImages: [
      "https://images.unsplash.com/photo-1542068829-1115f7259450?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=60&auto=format&fit=crop",
    ],
    title: "ტყავის საფულე",
    tags: "#საფულე, #ტყავი, #უნისექსი",
    description:
      "ელეგანტური და კომპაქტური ხელნაკეთი საფულე ნატურალური ტყავით — იდეალური ყოველდღიურობაში.",
    price: 80,
  },
  {
    headImage:
      "https://i.etsystatic.com/57864190/r/il/8cc831/6715775299/il_600x600.6715775299_7guo.jpg",
    otherImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542068829-1115f7259450?w=600&q=60&auto=format&fit=crop",
    ],
    title: "მინი ხელჩანთა ტყავისგან",
    tags: "#ხელჩანთა, #ტყავის, #მინიმალისტური",
    description:
      "მინიმალისტური დიზაინის ხელნაკეთი მინი ჩანთა, იდეალურია ქალაქის სტილისთვის.",
    price: 120,
  },
  {
    headImage:
      "https://i.etsystatic.com/21965694/c/1794/1794/761/577/il/929551/7022587261/il_600x600.7022587261_td0i.jpg",
    otherImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542068829-1115f7259450?w=600&q=60&auto=format&fit=crop",
    ],
    title: "უნისექს ჩანთა ყოველდღიური მოხმარებისთვის",
    tags: "#უნისექსი, #ტყავი, #უნივერსალური",
    description:
      "ტყავისგან დამზადებული ხელნაკეთი ჩანთა, რომელიც შესაფერისია როგორც ქალებისთვის, ასევე მამაკაცებისთვის.",
    price: 140,
  },
  {
    headImage:
      "https://i.etsystatic.com/60765854/r/il/ed9926/7015516392/il_600x600.7015516392_7obm.jpg",
    otherImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542068829-1115f7259450?w=600&q=60&auto=format&fit=crop",
    ],
    title: "ტყავის სამგზავრო ჩანთა",
    tags: "#სამგზავრო, #ტყავი, #ხელნაკეთი",
    description:
      "პრაქტიკული ხელნაკეთი სამგზავრო ჩანთა მაღალი გამძლეობის ტყავით და კომფორტული ტარებისთვის.",
    price: 180,
  },
  {
    headImage:
      "https://i.etsystatic.com/7994687/c/2098/2098/493/0/il/edbc14/4784371004/il_600x600.4784371004_ej9p.jpg",
    otherImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542068829-1115f7259450?w=600&q=60&auto=format&fit=crop",
    ],
    title: "ტყავის კლასიკური ჩანთა",
    tags: "#კლასიკური, #ტყავი, #ხელნაკეთი",
    description:
      "კლასიკური სტილის ხელნაკეთი ჩანთა, რომელიც იდეალურია საქმიანი სტილისთვის და ყოველდღიური ტარებისთვის.",
    price: 160,
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
