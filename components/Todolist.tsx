import Todos from './Todos'


const TodoList = ({todos}) => {
  return (
    <div>
        {todos.map(
            (todo)=>{
                <Todos todo={todo} key={todo.id}/>
            }
        )}   
    </div>
  )
}

export default TodoList