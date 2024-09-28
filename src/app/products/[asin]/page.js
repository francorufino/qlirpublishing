import products from "../../../data/products.json";

import Image from "next/image";
import ButtonShell from "@/app/components/buttons/ButtonShell";
import Notebook85x11description from "@/app/components/products/notebook85x11description";

const ProductDetail = ({ params }) => {
  const { asin } = params;

  const product = products.product.find((item) => item.asin === asin);
  // const notebook = notebook85x11.notebook85x11[0];

  if (!product) {
    return <section>Product not found</section>;
  }

  return (
    <>
      <section className=" bg-[url(/images/art/bg_products.png)]">
        <section className="flex m-auto justify-center max-w-screen-xl p-8">
          <section className="flex">
            <section className="flex flex-col">
              <section className="flex">
                <section className="w-[130px] flex flex-col gap-2">
                  <section>
                    {" "}
                    <Image
                      className="flex"
                      src={`/images/products/firstPagePersonalization85x11.png`}
                      width={130}
                      height={150}
                      alt="First page personalization"
                    />
                  </section>
                  <section>
                    {" "}
                    <Image
                      className="flex"
                      src={`/images/products/notebook85x11_innerPageSingle.png`}
                      width={130}
                      height={150}
                      alt="Lined Page"
                    />
                  </section>
                  <section>
                    {" "}
                    <Image
                      className="flex"
                      src={`/images/products/notebookwrittenshakspeare.jpeg`}
                      width={130}
                      height={150}
                      alt="Product cover"
                    />
                  </section>
                </section>
                <section className="w-[420px] flex pl-2">
                  {" "}
                  <Image
                    className="flex"
                    src={`/${product.product_images.cover}`}
                    width={420}
                    height={200}
                    alt="Product cover"
                  />
                </section>
              </section>{" "}
              <section className="w-[550px]">
                <Image
                  className="flex pt-2"
                  src={`/${product.product_images.entire_cover}`}
                  width={550}
                  height={300}
                  alt="Product cover"
                />
              </section>
            </section>
            <section className="w-[650px]">
              <section className="pl-5 border-b-2 border-mbrown ">
                <section>
                  <h1 className="text-3xl font-bold">{product.title}</h1>
                  <h2 className="mt-2">by {product.author}</h2>{" "}
                  <p className=" text-mblack mt-2">
                    {product.size.width} x {product.size.height} -{" "}
                    {product.page_count} pages{" "}
                  </p>
                  <br />{" "}
                  <p className="text-2xl font-bold text-mblack">
                    Price: {product.sale_price || product.original_price}{" "}
                  </p>
                  <ButtonShell className="mt-4">
                    <a
                      href={product.amazon_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy on Amazon
                    </a>
                  </ButtonShell>
                </section>
                <br />
              </section>
              <section>
                <br />
                <Notebook85x11description />
              </section>
              <br />
              <br />
              <section>
                <ButtonShell className="relative mt-4 ">Go Back</ButtonShell>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default ProductDetail;
