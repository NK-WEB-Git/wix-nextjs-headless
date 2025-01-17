import Image from "next/image";
import Link from "next/link";

type CategoryListProps = {
  categories: number[];
};

function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            href="/list?cat=test"
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                alt="category"
                src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category name
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
