import { useState } from 'react'


export default function About({ name }) {

    const [rotate, setRotate] = useState(false)
    const [rotate2, setRotate2] = useState(false)


    return (
        <>
            <div id={name} className="flex min-h-3/4 h-screen bg-slate-200 ">
                <div className="w-5/12  h-3/4 my-auto mx-auto">
                    <div className="h-full flex flex-col justify-between">
                        <span className="text-white text-4xl mx-auto mb-16"> The Team</span>
                        <div className="flex flex-row justify-between h-full">
                            <div className="perspective w-80 h-80">
                                <div className={!rotate ? "rotate" : "rotate2"}>
                                    <img
                                        onClick={() => setRotate(!rotate)}
                                        src="https://randomuser.me/api/portraits/women/27.jpg"
                                        className="face z-10 mx-auto my-auto w-80 h-80 front"
                                    />
                                    <div
                                        onClick={() => setRotate(!rotate)}
                                        className="face back bg-white z-10 mx-auto my-auto w-80 h-80 back"
                                    >Simon Roder</div>
                                </div>
                            </div>
                            <div className="perspective w-80 h-80">
                                <div className={!rotate2 ? "rotate" : "rotate2"}>
                                    <img
                                        onClick={() => setRotate2(!rotate2)}
                                        src="https://randomuser.me/api/portraits/women/27.jpg"
                                        className="face z-10 mx-auto my-auto w-80 h-80 front"
                                    />
                                    <div
                                        onClick={() => setRotate2(!rotate2)}
                                        className="face back bg-white z-10 mx-auto my-auto w-80 h-80 back"
                                    >Hakan Koese</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

