import React, {FunctionComponent, useEffect, useState} from "react"
import "./scroll.css"


const Scroll : FunctionComponent=()=>{
    const [scrolled,setScrolled]= useState(false)
    const [theme, setTheme]=useState("dark")
    const themeToggler=()=> theme === "dark" ? setTheme("light"):setTheme("dark")

    useEffect(()=>{

        window.addEventListener("scroll", onScroll)
        return ()=> window.removeEventListener("scroll", onScroll)
    },[scrolled])
    const onScroll=()=>{
        if(window.screenY > 50){
            setScrolled(false)
            console.log("scolled to 50 true")
        }else{
            setScrolled(true)
            // console.log("scolled to 50 false")
        }
    }
    return(
        <div className={scrolled ? "scrolled":""}>
            <div className={"navbarrr"}>
                <p>Home</p>
                <p>Something</p>
                <p>Something else</p>
            </div>
        </div>
    )
}









export default Scroll
