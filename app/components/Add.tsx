"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

function Add() {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-center w-32">
            <Button className="bg-transparent border-none text-primary shadow-none hover:bg-transparent hover:text-slate-900">
              <Minus className="w-4 h-8" />
            </Button>
            <span>0</span>
            <Button className="bg-transparent border-none text-primary shadow-none hover:bg-transparent hover:text-slate-900">
              <Plus className="w-4 h-8" />
            </Button>
          </div>
        </div>
        <div className="">
          Only <span className="text-orange-500">4 items</span> left! Don{"'"}t
          miss it
        </div>
      </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-primary text-primary py-2 px-4 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:ring-none">
        Add to cart
      </button>
    </div>
  );
}

export default Add;
