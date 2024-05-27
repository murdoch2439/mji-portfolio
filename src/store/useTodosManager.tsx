import React, {
    useCallback,
    useReducer,
    createContext,
    useContext,
    FunctionComponent,
    ReactNode,
    PropsWithChildren
} from "react";
import any = jasmine.any;

interface Todo {
    id:number
    done:boolean
    text:string
}

type ActionType= | { type:"ADD", text:string } | {type:"REMOVE", id:number}

type props={
    todos:Todo[]
    addTodo:(text:string)=>void
    removeTodo:(id:number)=>void
}

type UseTodosManagerResult = ReturnType<typeof useTodosManager>

const TodoContext = createContext<UseTodosManagerResult>({
    todos:[],
    addTodo:()=>{},
    removeTodo:()=>{}
})

 function useTodosManager(initialTodos:Todo[]):props{
    const [todos, dispatch] = useReducer((state: Todo[], action: ActionType)=>{
        switch(action.type){
            case "ADD": return [...state, {id:state.length, text:action.text, done:false}]
            case "REMOVE": return state.filter(({id})=> id !== action.id)
            default: throw new Error("This case is not propely handled")
        }
    }, initialTodos)  ;
     const addTodo= useCallback((text:string)=>{
         dispatch({type:"ADD", text})
     },[])
    const removeTodo= useCallback((id:number)=>{
        dispatch({type:"REMOVE", id})
    },[])


    return {todos, addTodo, removeTodo}
}









// export  const TodosProvider: FunctionComponent<{initialTodos:Todo[]}> =({initialTodos, })=>{
//     return(
//         <TodoContext.Provider value={useTodosManager(initialTodos)}>
//             {children}
//         </TodoContext.Provider>
//     )
// }

export const   useTodos=():Todo[]=>{
           const {todos} =useContext(TodoContext)
    return todos
}

export const   useAddtodo=():UseTodosManagerResult["addTodo"]=>{
    const {addTodo} =useContext(TodoContext)
    return addTodo
}
export const   useRemovetodo=():UseTodosManagerResult["removeTodo"]=>{
    const {removeTodo} =useContext(TodoContext)
    return removeTodo
}
