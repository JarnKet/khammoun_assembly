"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { lawLinks } from "@/constants/lawLinks";

const NavBar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="px-10 navbar bg-base-100">
      <div className="w-full ">
        <button
          className="w-[60px] h-[60px] relative hover:scale-110"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={"/images/logo.png"}
            unoptimized
            alt="lao assembly logo"
            fill
            objectFit="contain"
            className="absolute "
          />
        </button>

        <div className="flex justify-end w-full dropdown ">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </label>
          <ul
            tabIndex={0}
            className={`${
              toggle ? "menu menu-sm dropdown-content" : "hidden"
            }   mt-16 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
          >
            <li>
              <Link href={`/presentation`}>ພາກສະເໜີ</Link>
            </li>
            <li>
              <Link href={`/news`}>ຂ່າວສານ</Link>
            </li>
            <li>
              <Link href={`/member`}>ສະມາຊິກສະພາ</Link>
            </li>
            <li>
              <a>ນິຕິກຳ</a>
              <ul className="p-2">
                {lawLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link target="_blank" href={`/contact`}>
                ຕິດຕໍ່
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="justify-end hidden w-full lg:flex">
        <ul className="z-10 px-1 menu menu-horizontal">
          <li>
            <Link href={`/presentation`}>ພາກສະເໜີ</Link>
          </li>
          <li>
            <Link href={`/news`}>ຂ່າວສານ</Link>
          </li>
          <li>
            <Link href={`/member`}>ສະມາຊິກສະພາ</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>ນິຕິກຳ</summary>
              <ul className="p-2">
                {lawLinks.map((link) => (
                  <li key={link.id}>
                    <Link target="_blank" href={link.url}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link href={`/contact`}>ຕິດຕໍ່</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
