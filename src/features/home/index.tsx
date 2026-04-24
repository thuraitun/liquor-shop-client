import { Category } from "./components/category";
import { HomeSlider } from "./components/home-slider";
import { LatestProduct } from "./components/latest-product";
import { Service } from "./components/service";

export const Home = () => {
  return (
    <div className="">
      <HomeSlider />
      <Category />
      <LatestProduct />
      <Service />
    </div>
  );
};
