import Navbar from "../components/Navbar";
import BlogPostCard from "./components/BlogPostCard";
import { client } from "@/sanity/lib/client";

export default async function Blog() {
  const posts = await getBlogPosts();
  return (
      <div className="py-8 max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
  );
}

async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc) {
    title,
    description,
    date,
    "slug":slug.current,
    image
  }`;

  const posts = await client.fetch(query);
  return posts;
}