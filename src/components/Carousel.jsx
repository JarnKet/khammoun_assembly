import React from "react";
import { getPosts } from "@/services";
import Link from "next/link";

const Carousel = async () => {
  const posts = await getPosts();

  return (
    <section className="min-h-screen hero">
      <div className="hero-content flex-col">
        <h1 className="font-bold text-4xl">ຂ່າວໃໝ່ລ່າສຸດ</h1>
        <div className="carousel w-[90%] lg:max-w-[50%] lg:max-h-[50%] ">
          {posts?.map((post, index) => (
            <div
              id={index}
              className="carousel-item relative w-full "
              key={index}
            >
              <img
                src={post.featuredImage.url}
                className="w-full "
                alt={`image`}
              />
              <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link
                  href={`#${index === 0 ? posts.length - 1 : index - 1}`}
                  className="btn btn-circle"
                >
                  ❮
                </Link>
                <Link
                  href={`#${index === posts.length - 1 ? 0 : index + 1}`}
                  className="btn btn-circle"
                >
                  ❯
                </Link>
              </div>
              <div className="absolute bottom-0 w-full border text-center bg-neutral p-4 text-base-100">
                <h1>
                  <Link href={`news/${post.slug}`}>{post.title}</Link>
                </h1>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-neutral">
          <Link href={`news`}>ຂ່າວສານທັງໝົດ</Link>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
export const revalidate = 86400;
