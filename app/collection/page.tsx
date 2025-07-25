import { Input } from "@/components/ui/input";
import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function page() {
  return (
    <section className="w-full h-screen">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[50%] flex items-center">
          {/* Search */}
          <Input type="search" placeholder="Search Product..." />
          <Button>
            <Search />
          </Button>
        </div>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="აირჩიე კატეგორია" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>კატეგორიები</SelectLabel>
              <SelectItem value="/">ყველა</SelectItem>
              <SelectItem value="apple">ტყავის</SelectItem>
              <SelectItem value="banana">ხის დეტალებით</SelectItem>
              <SelectItem value="blueberry">ნაქსოვი</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Footer />
    </section>
  );
}
