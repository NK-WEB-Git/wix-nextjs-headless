import React from "react";
import ProductImages from "../components/ProductImages";
import { Separator } from "@/components/ui/separator";
import CustomizeProduct from "../components/CustomizeProduct";
import Add from "../components/Add";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/** IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/** TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          placeat, ipsam cupiditate neque delectus excepturi porro! Dolorum nam
          voluptas a eos delectus unde repellendus. Similique mollitia voluptas
          aliquam est iure.
        </h1>
        <Separator />
        <div className="flex items-center gap-2">
          <span className="text-xl text-gray-500 line-through">$59</span>
          <span className="font-medium text-2xl">$49</span>
        </div>
        <Separator />
        <CustomizeProduct />
        <Add />
        <Separator />
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi
            ex illum enim error. Eos, numquam eaque? Temporibus, corporis ipsum,
            in rerum quas explicabo maxime vel corrupti fugit unde reiciendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi
            ex illum enim error. Eos, numquam eaque? Temporibus, corporis ipsum,
            in rerum quas explicabo maxime vel corrupti fugit unde reiciendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi
            ex illum enim error. Eos, numquam eaque? Temporibus, corporis ipsum,
            in rerum quas explicabo maxime vel corrupti fugit unde reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
