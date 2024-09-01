import React from "react";
import Image from "next/image";
import { Poiret_One } from "next/font/google";
import Link from "next/link";

const gpoi = Poiret_One({
  subsets: ["latin"],
  weight: ["400"]
  // variable: "--font-gpoi"
});

const Header = () => {
  return (
    <section className={`w-full bg-white ${gpoi.className}`}>
      <section className="flex justify-between m-auto items-center gap-8 p-6 max-w-screen-xl">
        <section>
          <Image src={"/images/brand/logo.png"} width={100} height={100} />
        </section>
        <section>
          <ul className="flex justify-evenly gap-8 text-2xl p-6">
            <Link href="/">
              <li className="border-y-4 border-transparent hover:border-myellow cursor-pointer">
                Home
              </li>
            </Link>{" "}
            <Link href="/products">
              {" "}
              <li className="border-y-4 border-transparent hover:border-myellow cursor-pointer">
                Products
              </li>
            </Link>
            <Link href="/about">
              <li className="border-y-4 border-transparent hover:border-myellow cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/contact">
              {" "}
              <li className="border-y-4 border-transparent hover:border-myellow cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Header;
