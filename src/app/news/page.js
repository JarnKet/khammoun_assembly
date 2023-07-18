import Banner from "@/components/Banner";
import { getPosts } from "@/services";

import Link from "next/link";

const Page = async () => {
  const posts = await getPosts();

  return (
    <>
      <Banner text={"ຂ່າວສານທັງໝົດ"} />

      <section className="w-full py-6 lg:px-10">
        <div className="container grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3 justify-items-center">
          {posts?.map((post) => (
            <div className="card w-80 lg:w-96 glass" key={post.id}>
              <figure className="border h-[50%] ">
                <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  className="object-cover w-full h-full "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.date}</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-neutral">
                    <Link href={`news/${post.slug}`}>ອ່ານຕໍ່</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
export const revalidate = 86400; // revalidate this page every 1 day
