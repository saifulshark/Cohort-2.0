export function Signin(){
    return (
        <>
            <div className="flex flex-row">
            <div className=" w-1/2 h-screen flex flex-col justify-center content-center flex-wrap">
                <div className="flex flex-col text-center">
                    <h1 className="text-5xl font-bold">Login to your account</h1>
                    <h3 className="text-xl font-light text-gray-500 mt-4">Do not have an account? <a href="/signup"><u>Signup</u></a></h3>
                </div>
                <br />
                <br />
                <div className="mt-4">
                    <p className="text-2xl font-semibold">Email</p>
                    <input className="border-2 rounded h-9 mt-2 w-full placeholder:p-2 placeholder:text-xl" type="text" name="" id="" placeholder="Enter your email"/>
                </div>
                <div className="mt-4">
                    <p className="text-2xl font-semibold">Password</p>
                    <input className="border-2 rounded h-9 mt-2 w-full placeholder:p-2 placeholder:text-xl" type="password" name="" id="" />
                </div>

                <div className="mt-4">
                    <button className="bg-black text-white h-11 w-full rounded text-xl font-medium">Login</button>
                </div>
                

                
            </div>
            <div className="bg-slate-100 w-1/2 h-screen flex content-center flex-wrap">
                <div className="m-32 font-sans">
                    <p className="text-left text-4xl font-bold">"The customer service received is exceptional. The support team went above and beyond to address my concerns"</p>
                    <br />
                    <p className="text-left text-2xl font-medium ">Jules Winnfield</p>
                    <p className="text-left text-lg font-medium text-gray-600">CEO, Acme Inc</p>
                </div>
                
            </div>
        </div>
        </>
    )
}