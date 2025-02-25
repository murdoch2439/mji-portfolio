import React, {FunctionComponent, ReactNode, useEffect, useRef} from "react"
import {useGlobalStore} from "../../store/Context";


type props={
    children: ReactNode;
    id:string
}

const SectionComponent : FunctionComponent<props> =({children, id})=> {
    const {setActiveSection} = useGlobalStore()
    const sectionRef = useRef(null);
    const timeoutRef:any= useRef(null);


    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    clearTimeout(timeoutRef.current);

                    timeoutRef.current = setTimeout(() => {
                        setActiveSection(id);
                    }, 50);
                    // setActiveSection(id);
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            clearTimeout(timeoutRef.current);
        };
    }, [id, setActiveSection]);



    return (
        <>
            {
                id === "" ?
                    <div id={id} ref={sectionRef}>
                        {children}
                    </div> :
                    <section id={id} ref={sectionRef}>
                        {children}
                    </section>
            }
        </>

)
}

export default SectionComponent
