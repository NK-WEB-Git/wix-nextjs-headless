import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList products={[0, 1, 2, 3, 4, 5, 6, 7]} />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList categories={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList products={[0, 1, 2, 3]} />
      </div>
    </div>
  );
}
