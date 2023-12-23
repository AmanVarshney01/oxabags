import { getBag } from "@/sanity/lib/sanity.query"


export default async function Home() {
  const bag = await getBag()
  return (
    <main className="">
      <h1 className='text-4xl'>Amanasia</h1>
      {bag.map((item : any) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.color}</p>
        </div>
      ))}
    </main>
  )
}
