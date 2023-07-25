"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navLinks } from "@/constants";

const normalLinks = navLinks.normalLinks;
const extraLinks = navLinks.extraLinks;

const NavLinks = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [index, setIndex] = useState(null);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleSubToggle = (subIndex) => {
    setTrigger((prevTrigger) => {
      if (prevTrigger === true && index === subIndex) {
        return false;
      }
      return true;
    });
    setIndex(subIndex);
  };
  return (
    <>
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
            onClick={handleToggle}
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
            }   mt-16 z-[1] p-2 w-full shadow bg-base-100 rounded-box `}
          >
            {normalLinks.map(({ id, title, url }) => (
              <li key={id} onClick={() => setToggle((prev) => !prev)}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
            {extraLinks.map(({ title, sublink }, index) => (
              <li key={index}>
                <a>{title}</a>
                <ul className="p-2">
                  {sublink.map(({ id, title, url }) => (
                    <li key={id} onClick={() => setToggle((prev) => !prev)}>
                      <Link href={url}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li onClick={() => setToggle((prev) => !prev)}>
              <Link href={`/contact`}>ຕິດຕໍ່</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="justify-end hidden w-full lg:flex">
        <ul className="z-10 px-1 menu menu-horizontal">
          {normalLinks.map(({ id, title, url }) => (
            <li onClick={() => setTrigger(false)} key={id}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
          {extraLinks.map(({ title, sublink }, subIndex) => (
            <li
              key={subIndex}
              onClick={() => handleSubToggle(subIndex)}
              className="relative"
            >
              <div>{title}</div>
              {trigger && index === subIndex && (
                <ul className="absolute p-2 bg-white rounded-2xl top-[60px]">
                  {sublink.map(({ id, title, url }) => (
                    <li key={id}>
                      <Link href={url}>{title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link onClick={() => setTrigger(false)} href={`/contact`}>
              ຕິດຕໍ່
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
