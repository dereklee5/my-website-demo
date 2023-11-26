import BlogPostHeader from "./components/BlogPostHeader";
import { client } from "@/sanity/lib/client";
import { notFound} from "next/navigation";
import { PortableText} from "@portabletext/react";

export default async function BlogPost({ params }) {
    const post = await getBlogPost(params.post);

    return (
        <div className="py-8 max-w-5xl px-4 mx-auto">
            <div className="mx-auto max-w-5xl space-y-8 py-8">
                <BlogPostHeader post={post} />
                <hr className="border-primary-200" />
                <article>
                    <PortableText value={post.content} components={[]} />
                </article>
            </div>
        </div>
    );
  }

async function getBlogPost(slug) {
    const query = `*[_type == "blogPost" && slug.current == $thisIsMySlug][0] {
        title,
        description,
        date,
        "slug":slug.current,
        image,
        content
      }`;
    
      const post = await client.fetch(query, { thisIsMySlug: slug });
      if (!post) {
        return notFound();
      } else {
        return post;
      }
}