import{createContext , useContext} from "react"

export const TodoContext =createContext({
  todos:[
    {
      id:1,
      todo: "To do message",
      completed:"false",
    }
  ],
  addTodo:(todo) =>{},
  updateTodo:(todo,id) =>{},
  deletedTodo: (id)=>{},
  toggleComplete: (id) => {}
})

export const useTodo =() =>{
  return useContext(TodoContext)
}

export const TodoProvider =TodoContext.Provider