import Image from "next/image";
import React from "react";

function ProductCart() {
  return (
    <div className="flex gap-4">
      <div>
        <Image
          alt="product"
          src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
          height={96}
          width={72}
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div>
          {/* TITLE */}
          <div className="flex items-center justify-between gap-8">
            <h3 className="font-semibold">Product Name</h3>
            <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
              <div className="text-xs text-green-500">3 x </div>
              $45
            </div>
          </div>
          {/* DESC */}
          <div className="text-sm text-gray-500">available</div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Qty. 30</span>
          <span className="text-blue-500" onClick={() => {}}>
            Remove
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
