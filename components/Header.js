import ScrollTo from 'react-scroll-into-view'


export default function Header() {
  return(
    <div className="flex flex-row justify-between bg-indigo-900 bg-opacity-70 text-white font-bold h-20 w-full fixed">
      <div className="mx-auto my-auto text-2xl">Startup</div>
      <div className="mx-auto my-auto w-1/6 flex flex-row justify-between">
      <ScrollTo className="py-2 px-3 transition-colors  hover:bg-opacity-40 hover:bg-indigo-500  hover:rounded-md" selector={'#home'}><button>Home</button></ScrollTo>
      <ScrollTo className="py-2 px-2 transition-colors  hover:bg-opacity-40 hover:bg-indigo-500  hover:rounded-md" selector={'#about'}><button>About</button></ScrollTo>
      <ScrollTo className="py-2 px-2 transition-colors  hover:bg-opacity-40 hover:bg-indigo-500  hover:rounded-md" selector={'#contact'}><button>Contact</button></ScrollTo>
      </div>
    </div>
  )
}
