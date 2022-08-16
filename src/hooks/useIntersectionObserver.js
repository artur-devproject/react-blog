import { useEffect, useRef } from "react"

export const useIntersectionObserver = (callback, dependency) => {
    const observer = useRef(null)
    const element = useRef()

    useEffect(() => {
        if(observer.current) observer.current.disconnect()
        
        observer.current = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) callback()
        })
        
        observer.current.observe(element.current)

        return () => observer.current.disconnect()
    }, dependency)

    return element
}