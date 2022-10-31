import '@styles/globals.css'
import Head from 'next/head'
import Header from '@components/Header'
import Home from '@components/Home'
import About from '@components/About'
import Contact from '@components/Contact'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Those guys mean business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
        <Home name="home"/>
        <About name="about"/>
        <Contact name="contact"/>

    </div>
  )
}

export default App
