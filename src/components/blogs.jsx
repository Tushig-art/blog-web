import Link from "next/link";
import { BlogCard } from "./blog-card";

export const Blogs = async () => {
  const response = await fetch("https://next-mock-api.vercel.app/api/posts?size=9");
  const data = await response.json();
  return (
    <section className="container">
      <h2 className="text-[#181A2A] font-bold text-2xl mb-7">All Blog Post</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link className="block" href={`/blog/${item.id}`} key={item.id}>
            <BlogCard post={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};