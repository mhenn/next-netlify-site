import useStore from '../utils/State'
import onScreen from '../utils/OnScreen'
import EmployeeCard from './EmployeeCard'

export default function About({ name }) {

    const { setVisible } = useStore()

    const containerRef = onScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    }, setVisible, true)

    return (
        <>
            <div id={name} ref={containerRef} className="flex min-h-3/4 h-screen bg-slate-200 ">
                <div className="w-5/12  h-3/4 my-auto mx-auto">
                    <div className="h-full flex flex-col justify-between">
                        <span className="text-white text-4xl mx-auto mb-16"> The Team</span>
                        <div className="flex flex-row justify-between h-full">
                            <EmployeeCard />
                            <EmployeeCard />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

