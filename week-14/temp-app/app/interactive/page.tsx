"use client"

import { useState } from "react"


export default function () {
    const [count,setCount] = useState(0);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-blue-100 rounded-lg border-8 p-4 h-1/2 w-1/2 flex flex-col justify-between">
                <div className="text-4xl font-extrabold">
                    Welcome to Interactive Page
                </div>

                <div className="text-lg">
                    {`
                This route features a count button that demonstrates the
                power of client-side interactivity in Next.js. Click the button
                and see the count go up! This interactive feature is powered
                by the "use client" directive in Next.js, which allows this
                component to be rendered on the client-side.
                    `}
                </div>
                <button type="button" 
                className="w-fit text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={()=>{setCount(count+1)}}
                > {"Count is " + count}
                </button>
            </div>
        </div>
    )
}
