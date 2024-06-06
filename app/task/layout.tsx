import {ReactNode} from "react";
import Link from "next/link";
interface hy {
    children:ReactNode;
}
export default function come({children}: hy){
    const Links=[
        {href:"/Showcase", label:"Showcase"},
        {href:"/task/docs", label:"Docs"},
        {href:"/Blogs", label:"Blogs"},
        {href:"/Analytics", label:"Analystics"},
        {href:"Templates", label:"Enterprise"}
    ];
    
    return(
    <>
    <div className="flex mb-24 ">
        <ul className="flex mt-5 mb-2 bg-white w-1/2 ml-44 text-sm border-gray-500 ">
            {Links.map(({href,label})=>(
                <li key={href}>
                    <Link href={href} className=" mx-5">
                        {label}
                    </Link>
                </li>
            ))}
            
        </ul>
            <div className="flex ml-38 mt-4">
                <button className=" flex h-10  bg-gray-200 px-2 py-2 mx-4 rounded text-sm ">
                    Search documentation...
                </button>
                <button className="flex bg-white text-black border-2  border-gray-500 px-2 py-2 mx-4 rounded">
                    Deploy
                </button>
                <button className=" flex ml h-fit w-fit place-items-end bg-black text-white rounded px-2 py-2">
                    Learn
                </button>
            </div>
        
            
            
        
       </div>
        <div>
            {children}
        </div>
    
    </>
    
    )
}