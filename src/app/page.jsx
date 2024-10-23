
import { Blogs } from "./components/blogs";
import { Carousels2 } from "./components/carousel2";
import { TrendingCards } from "./components/trending-cards";

export default function Home() {
  return (
    <main>
      <Carousels2 />
      <TrendingCards />
      <Blogs />
    </main>
  );
}