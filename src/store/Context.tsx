import React, {createContext, FunctionComponent, ReactNode, useContext, useState} from "react"

export interface BasicGlobalContextType{
    loading:boolean,
    activeSection:string
    setActiveSection:(state:string)=>void
}






export const GlobalContext = createContext<BasicGlobalContextType>({
    loading:false,
    activeSection:"#",
    setActiveSection:()=>{}
})


type Props={
    children:ReactNode
}





export const GlobalStore:FunctionComponent<Props> =({children})=>{
    const [loading, setLoading] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>("#")
    const values={loading, setLoading, activeSection, setActiveSection}

    return(
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalStore =() =>useContext(GlobalContext)
