import { defaults } from 'cypress/types/lodash'
import { useEffect, useRef } from 'react'

const onScreen = (options, setter) => {
    const containerRef = useRef(null)
    const callback = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
            setter(true)
        }
    }

    useEffect(() => {

        const observer = new IntersectionObserver(callback, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])
    return containerRef
}

export default onScreen
