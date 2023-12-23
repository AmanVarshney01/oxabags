import { urlForImage } from "@/sanity/lib/image"
import { getProducts } from "@/sanity/lib/sanity.query"
import Image from "next/image"


export default async function Home() {
  const products = await getProducts()
  return (
    <main className="">
      {/* <h1 className='text-4xl'>Amanasia</h1> */}
      {products.map((item : any) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.color}</p>
          <p>{item.price}</p>
          <Image src={urlForImage(item.images[0])} width={200} height={200} alt="" />
        </div>
      ))}
    </main>
  )
}
