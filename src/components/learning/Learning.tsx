import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    Dispatch,
    FunctionComponent, ReactNode,
    SetStateAction,
    useCallback,
    useReducer,
    useRef,
    useState
} from "react"
import {  useTodos, useAddtodo, useRemovetodo} from "../../store/useTodosManager";
import {UL} from "./UlComponent";

//Create Custom Hook
// ======================
















const useNumber =(initialValue: number)=>useState<number>(initialValue)
























const CustomButton: FunctionComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>& {title?:string}  =({title, children,style,  ...rest})=>{
    return(
        <button {...rest} style={{...style, backgroundColor:"green"}}>
            {title ?? children}
        </button>
    )




















}

// type UseNumberValue = ReturnType<typeof useNumber>[0]
// type UseNumberSetValue = ReturnType<typeof useNumber>[1]

 // const IncrementorComponent : FunctionComponent<{value: UseNumberValue, setValue: UseNumberSetValue}>  =({value, setValue})=>{
 //    return(
 //         <CustomButton className={"btn btn-primary"} style={{color:"yellow"}} onClick={()=>setValue(prev => prev + 1)} title={`Add - ${value}`} />
 //
 //    )
 // }

const LearningHooks : FunctionComponent =()=>{
    const todos = useTodos()
    const addTodo=useAddtodo()
    const removeTodo = useRemovetodo()
    // const {todos, addTodo, removeTodo } =useTodosManager([
    //     {id:0, text:"hi there", done:false}
    // ])
    const newTodoRef = useRef<HTMLInputElement>(null)
    const onAddTodo = useCallback(()=>{
        if(newTodoRef.current){
            addTodo(newTodoRef.current.value)
            newTodoRef.current.value = ""
        }

    },[addTodo])


    // const [value, setValue] = useNumber(0)


    return(
        <section className={"container"}>

            <h5>Todos</h5>
            <UL
                className={"papa"}
             items={todos}
                itemClick={(item)=>alert(item.id)}
             render={(todo)=>(
                 <>
                     {todo.text}
                     <button onClick={()=>removeTodo(todo.id) }>Remove</button>
                 </>
             )}
            />

            {/*{*/}
            {/*    todos.map((item)=>{*/}
            {/*        return (*/}
            {/*            <div key={item.id}>*/}
            {/*                {item.text}*/}
            {/*                <button onClick={()=>removeTodo(item.id) }>Remove</button>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
            <div>
                <input type={"text"} ref={newTodoRef} />
                <CustomButton onClick={onAddTodo}>Add</CustomButton>
            </div>


            {/*<IncrementorComponent value={value} setValue={setValue}  />*/}
        </section>
    )
}

const Wrapper=()=>{
return(

        <div style={{ display:'grid', gridTemplateColumns:"50% 5%"}}>
            <LearningHooks />
            <LearningHooks />
        </div>


    )

}

export default Wrapper
