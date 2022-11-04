import useStore from '../utils/State'
import onScreen from '../utils/OnScreen'

export default function Home({ name }) {

    const { setVisible } = useStore()
    const containerRef = onScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    }, setVisible, false)

    return (
        <>
            <div id={name} ref={containerRef} className="flex flex-col gradient min-h-3/4 h-screen ">
                <div className="text-white h-full w-5/12 flex flex-col items-center">
                    <div className="ml-auto my-auto">
                        <div className="text-6xl nice-text   flex flex-col">
                            <span>Automation</span>
                            <span>Digitalization</span>
                            <span>Data-Processing</span>
                            <span>Training</span>    </div>
                        <div className="text-2xl ml-auto ">Those guys mean business</div>
                    </div>
                </div>
                <div className="w-full h-32 bg-slate-200" />
            </div>
        </>
    )
}

