
import Newform from "@/components/Todoform"
import Todolist from "@/components/Todolist"
import db from  "@/app/utils/db"


const GetTodos = async ()=>{
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 5000))

    const todos = await  db.todo.findMany({})
    return todos
}

const  hey = async()=>{
    
    const todos = await GetTodos()
    return (
        <>
            <div>hey</div>
            <Todolist todos={todos}/>

        </>
    )
}

export default hey;