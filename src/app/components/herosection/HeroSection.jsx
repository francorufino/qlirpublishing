import React from "react";
import Image from "next/image";
import ButtonShell from "../buttons/ButtonShell";
import BtnClientSide from "../buttons/BtnClientSide";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <section className="flex p-8">
        <section>
          {" "}
          <Image
            src={"/images/art/abcBrasileirinhosBoy.png"}
            width={300}
            height={300}
          />
        </section>
        <section className="m-auto">
          {" "}
          <Image
            className="invisible md:visible"
            src={"/images/art/face.png"}
            width={250}
            height={250}
          />
        </section>
        <section>
          {" "}
          <Image src={"/images/art/notebooks.png"} width={300} height={300} />
        </section>
      </section>
      <section className="flex p-8">
        <section>
          {" "}
          <Image
            className="invisible sm:visible"
            src={"/images/art/coffee.png"}
            width={150}
            height={150}
          />
        </section>
        <section className="flex flex-col m-auto">
          <h1 className="text-5xl text-center px-2">
            Unique Designs, Creative Journeys
          </h1>
          <br />
          <h2 className="flex m-auto text-center px-2 text-lg">
            Start your next adventure with a collection that’s as unique as you.
            Every creation is a reflection of original creativity, with
            beautifully designed, one-of-a-kind covers. This is your next
            chapter—with us.
          </h2>
          <br />

          <ButtonShell className="mt-4">
            <Link href="/products">
              <BtnClientSide>Store</BtnClientSide>
            </Link>
          </ButtonShell>
        </section>
        <section>
          {" "}
          <Image
            className="invisible sm:visible"
            src={"/images/art/glasses.png"}
            width={130}
            height={130}
          />
        </section>
      </section>
      <section className="flex p-8 -mt-4">
        <section>
          {" "}
          <Image src={"/images/art/notebooks4.png"} width={300} height={300} />
        </section>
        <section className="m-auto">
          {" "}
          <Image
            className="invisible md:visible md:px-"
            src={"/images/art/headphones.png"}
            width={150}
            height={150}
          />
        </section>
        <section>
          {" "}
          <Image src={"/images/art/notebooks2.png"} width={300} height={300} />
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
