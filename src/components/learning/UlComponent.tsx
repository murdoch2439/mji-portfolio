import React, {DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode} from "react"























export function UL<T> ({items, render, itemClick, children}: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {items:T[], render:(item:T) => ReactNode, itemClick:(item:T)=> void}>){
    return(
        <>
            {
                children ?? <ul>

                    {
                        items!.map((item, index)=>{
                            return(<li onClick={()=>itemClick(item)} key={index}>{render?.(item)}</li>)
                        })
                    }
                </ul>
            }
        </>
    )
}




