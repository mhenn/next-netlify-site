import React from 'react'

export default function EmployeeCard() {
    return (
        <article className="overflow-hidden w-80 h-80 slide-parent">
            <img
                src="https://randomuser.me/api/portraits/women/27.jpg"
                className=" z-10 mx-auto my-auto w-80 h-80"
            />
            <div className="slide " >
                <div
                    className=" bg-white bg-opacity-90 z-10 w-80 h-80 "
                >Hakan Koese</div>
            </div>
        </article>
    )
}
