import { Children, ReactNode } from "react";
import Link from "next/link";
import Newform from "@/components/Todoform";

interface child{
    children:ReactNode
}

export default function hey ({children}:child){
    const links = [    
    {href:"",label:"Todo"},
    {href:"",label:"About"},
    {href:"",label:"Docs"}
   ]
   return (
    <>
    <div className="bg-blue-300">
        <ul className="flex justify-between mx-48">
            {links.map(({href,label})=> (
                <li key={href} className="">
                        <Link href={href}>{label}</Link>
                    </li>
                     
            ))}
        

        </ul>     
    </div>
    <Newform/>
    <div>{children}</div>
    
    
    </>
   )
    

}