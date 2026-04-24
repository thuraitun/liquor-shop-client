import { Category } from "./components/category";
import { HomeSlider } from "./components/home-slider";
import { Product } from "./components/product";
import { Service } from "./components/service";

export const Home = () => {
  return (
    <div className="">
      <HomeSlider />
      <Category />
      <Product />
      <Service />
    </div>
  );
};
