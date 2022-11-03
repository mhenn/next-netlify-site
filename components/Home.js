

export default function Home({name}) {
  return (
    <>
      <div id={name} className="flex flex-col gradient min-h-3/4 h-screen ">
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
      <div className="w-full h-32 bg-slate-200"/>
      </div>
    </>
  )
}

