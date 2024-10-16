import Image from "next/image";

import { Button } from "@/components/ui/button";
import CampaignPhoto from "@/app/images/campaign.png";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

function ListPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/** CAMPAIGN */}
      <div className="hidden bg-pink-50 p-4 sm:flex justify-center h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products{" "}
            <Button>Buy Now</Button>
          </h1>
        </div>
        <div className="relative w-1/3">
          <Image
            src={CampaignPhoto}
            alt="campaign"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* FILTER */}
      <div className="mt-12">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <ProductList products={[0, 1, 2, 3]} />
      </div>
    </div>
  );
}

export default ListPage;
