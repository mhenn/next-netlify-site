import Footer from './Footer'

export default function Contact({ name }) {




    return (
        <>
            <div id={name} className="flex flex-col min-h-3/4 h-screen bg-slate-400">
                <div className="flex flex-col rounded-lg  bg-opacity-50 h-3/5 w-1/2 my-auto mx-auto bg-white">
                    <div className="mt-8 ml-8"><h3 className="text-2xl ">Feel free to contact us!</h3>
                        We are reachable via Mail as well as via mobile phone: NR
                    </div>
                    <form className="mx-auto my-auto w-full">
                        <div className="flex flex-row  justify-between">
                            <label className="ml-16">
                                Your Name
                                <input className="mt-4 text-gray-800 rounded w-full py-3 px-8 bg-white placeholder:font-semibold  hover:ring-1" placeholder={"Name"} />
                            </label>

                            <label className="mr-16">
                                Your E-mail
                                <input className="mt-4 text-gray-800 rounded w-full py-3 px-8 bg-white placeholder:font-semibold  hover:ring-1" placeholder={"E-mail"} />
                            </label>
                        </div>
                        <div className="mt-8 mx-16">
                            <label>
                                Your Message
                                <textarea className="mt-4 w-full mr-2 rounded-md" style={{ resize: 'none' }} >
                                </textarea>
                            </label>

                        </div>
                        <div className="mt-8 w-full flex"><button className="bg-indigo-200 hover:bg-indigo-400 rounded-lg py-2 px-2 mx-auto">Send Message</button></div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

