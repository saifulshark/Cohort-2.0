export function Blog(){
    return (
        <div className="p-28 flex flex-row">
            <div className="w-[70%] h-full">
                <h1 className="text-7xl font-extrabold">Taxing Laughter: The Joke Tax Chronicles</h1>
                <br />
                <p className="text-gray-600 text-xl">Posted on August 24, 2023</p>
                <br />
                <p className="text-gray-900 text-xl">Released in 2009, Node.js has revolutionized the way servers are programmed by developers. Before the creation of Node.js, servers were programmed using languages like PHP or Ruby. Now you can use JavaScript, a programming language meant to be used in the frontend, to write server code. Thanks to Node.js, developing full-stack applications has become much easier for developers.
                
                According to the official Node.js website, “Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.” 
                Let’s take a look at what this means step-by-step. 
                A JavaScript runtime is an environment where your JavaScript code is executed. It provides utility libraries and other tools that can be used when your code is ready to execute. A JavaScript engine, on the other hand, acts as a translator between the client and the user’s CPU. Since CPUs cannot natively execute JavaScript, it is the JavaScript engine’s job to compile your JS code into machine code, which can then be executed by the CPU. Now, let’s take a look at how you can download this JavaScript runtime on your own computer.</p>
            </div>
            <div className=" w-[30%] h-full">
                <p className="text-gray-950 text-xl">Author</p>
                <br />
                <div className="flex flex-row">
                    <div className="w-[15%] flex items-center">
                        <img className="rounded-full h-14 w-14 " src="https://miro.medium.com/v2/resize:fill:176:176/1*AsiJwr7-Yo9V0PfFON2oHg.jpeg" alt="" />
                    </div>
                    <div className="w-[85%]">
                        <h2 className="text-3xl font-extrabold">Jokester</h2>
                        <br />
                        <p className="text-gray-600 text-xl">Master of mirth, person of puns, and the funniest person in the kingdom</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}