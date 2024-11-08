 

import Link from "next/link";


export default function Navbar() {
    return(
        <div className=" bg-blue-800 text-white">
              <div className="flex justify-between items-center p-5">
              <div className="font-bold">
              <h1 className="text-3xl">My Website</h1>
              </div>

         <div className="flex space-x-7 pr-10 cursor-pointer text-1xl">
       <Link href="/">Home</Link>
            <br />
     <Link href="/about">About</Link>
            <br />
     <Link href="/jobs">Contact</Link>
            <br />
     <Link href="/jobs/progamming">Services</Link>
     </div>
        </div>
        </div>
        
    )
}