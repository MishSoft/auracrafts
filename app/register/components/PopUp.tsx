"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PopUp() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // მთავარ გვერდზე გადაყვანა
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer თუ კომპონენტი ადრე მოიშლება
  }, [router]);

  return (
    <Card className="flex items-center flex-col p-4 gap-4">
      <span className="text-center text-lg font-medium">
        გილოცავთ, თქვენ წარმატებით გაიარეთ რეგისტრაცია
      </span>
      <Check
        size={50}
        className="text-green-400 p-2 border-green-400 border-2 rounded-full"
      />
    </Card>
  );
}
