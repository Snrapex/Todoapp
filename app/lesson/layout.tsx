import{ReactNode} from "react";
import Link from "next/link";

interface hey{
    children:ReactNode;
}
export default function hello({children} :hey){
    const Links=[
        {href:"/showcase", label:"showcase"}, 
        {href:"/options", label:"option"}
    ]
    return (
        <>
            <ul>
                {Links.map(({href,label})=>(
                    <li key={href}>
                        <Link href={href}>
                            {label}
                        </Link>
                    </li>

                )

                
)}
                
            </ul>
            <div>
                {children}
            </div>
        </>
    )
}