import { promises } from "dns"
import { resolve } from "path"




export default async function About() {

    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    })

    return (
        <div className="flex space-x-9 h-50 py-96 bg-white"> 
            <h1 className="text-3xl font-bold text-black">About Me </h1>
            <p className="text-2xl font-bold w-1/3 text-black">This portfolio and the projects listed  Inshah Allah</p>
        </div>  
    )
}