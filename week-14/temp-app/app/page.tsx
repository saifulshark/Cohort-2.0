import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen">

      <div className="h-1/5 w-1/3 flex flex-col justify-between">
        <div className="my-4 text-3xl font-extrabold">
          Welcome to the HomePage
        </div>
        <div>
          <Subtitle text="Interactive Page: Interactive client-side rendering in action"></Subtitle>
          <Subtitle text="Static Page: Optimized static content for SEO."></Subtitle>
        </div>
      </div>

    </div>
  );
}

const Subtitle = ({text}:{text:string})=>{

  return (
    <div className="text-lg p-0.5">
      {text}
    </div>
  )
}
