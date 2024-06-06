"use server"

import db from "@/app/utils/db"
import { revalidatePath } from "next/cache"

export const NewTodo = async (data:FormData)=>{
   const NewTodo = data.get("todo") as string

   if (NewTodo){
      await db.todo.create({
         data:{
            content:NewTodo,
         },
      })
      revalidatePath("/sub-app")
   }
   

}