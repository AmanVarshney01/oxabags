import { urlForImage } from "@/sanity/lib/image";
import { getProductBySlug } from "@/sanity/lib/sanity.query";
import Image from "next/image";

export default async function ProductPage() {
  const product = await getProductBySlug("10-ruppe-ke-thele");
  // console.log(product);
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.size}</p>

      {/* <Image src={urlForImage(product.images[0])} width={100} height={100} alt="hahah" /> */}

      {product.images.map((image: any, index: number) => (
        <Image key={index} src={urlForImage(image)} width={100} height={100} alt={product.name} />
      ))}
    </div>
  );
}
