import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type ProductListProps = {
  products: number[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      {products.map((el) => (
        <Link key={el} href="/test" className="w-full">
          <div className="relative w-full h-80">
            <Image
              alt="product"
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
            />
            <Image
              alt="product"
              src="https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My description</div>
          <Button>Add to cart</Button>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
