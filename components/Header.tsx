import ScrollTo from 'react-scroll-into-view'


export default function Header() {
    return (
        <div className="z-20 flex flex-row justify-between bg-amber-600 bg-opacity-70 text-white font-bold h-20 w-full fixed">
            <div className="mx-auto my-auto overflow-hidden h-full" >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 100"
                    preserveAspectRatio="xMinYMid meet"
                >
                    <text
                        x="0"
                        y="65"
                        font-size="48"
                        fill="white"
                    >Startup</text>
                </svg>
            </div>
            <nav className="mx-auto my-auto w-1/6 flex flex-row justify-between">
                <ScrollTo className="py-2 px-3 transition-colors  hover:bg-opacity-40 hover:bg-indigo-500  hover:rounded-md" selector={'#home'}><button>Home</button></ScrollTo>
                <ScrollTo className="py-2 px-2 transition-colors  hover:bg-opacity-40 hover:bg-indigo-500  hover:rounded-md" selector={'#about'}><button>About</button></ScrollTo>
                <ScrollTo className="py-2 px-2 transition-colors  hover:bg-opacity-40 hover:bg-indigo-500  hover:rounded-md" selector={'#contact'}><button>Contact</button></ScrollTo>
            </nav>
        </div>
    )
}
