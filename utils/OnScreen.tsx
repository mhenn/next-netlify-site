import { useEffect, useRef } from 'react'


const onScreen = (options: any, callback: () => void) => {

    const containerRef = useRef(null)
    const internalCallback = (entries: any) => {
        const [entry] = entries
        if (entry.isIntersecting) callback()
    }

    useEffect(() => {
        const observer = new IntersectionObserver(internalCallback, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])
    return containerRef
}

export default onScreen
