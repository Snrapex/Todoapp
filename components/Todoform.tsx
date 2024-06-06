import { NewTodo } from "@/app/utils/action";

const Newform = ()=>{
    return(
    
        <form action={NewTodo}>
            <textarea className="border border-indigo/25"/>
            <button type="submit">Submit</button>
        </form>
    
        
    )
}

export default Newform;