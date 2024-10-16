"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import ProductCart from "./ProductCart";
import { Button } from "@/components/ui/button";

function ShoppingCartSheet() {
  // const cartItems = [];

  // if (!cartItems || cartItems.length === 0) {
  //   return <div>Your basket is currently empty</div>;
  // }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative flex mt-1">
          <ShoppingCart className="cursor-pointer" />
          <span className="absolute left-3 -top-3">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              6
            </div>
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <div>
              <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$999</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <Button variant="outline">View Cart</Button>
                <Button onClick={() => {}}>Checkout</Button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ShoppingCartSheet;
