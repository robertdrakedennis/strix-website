import React from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'
import '../styles/app.css'

const Home = () => (
    <div className="border-t-4 border-primary-500">
      <Head>
        <title>Home</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="title" content="Strix - Optimized rlcraft"/>
        <meta name="description" content="Optimized rlcraft "/>
        <meta name="keywords"
              content="Minecraft, Minecraft Server, Minecraft Forge, RLcraft, RL craft, rl craft, rlcraft minecraft curseforge "/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="3 days"/>
        <meta name="author" content="Strix" />
        <meta property="og:site_name" content="Strix- Optimized rlcraft" />
        <meta property="og:title" content="Strix - Optimized rlcraft"/>
        <meta property="og:description"
              content="Optimized rlcraft"/>
        <meta property="og:url" content="https://strix.gg"/>
      </Head>

      {/*<Nav />*/}

      <section className="neutral relative flex flex-col py-12 h-screen">
        <div className='relative container p-6 m-auto neutral flex flex-col md:flex-row'>
          <div className="order-2 md:order-1 pt-6 md:pt-0 md:mr-10 md:w-2/3">
            <h1 className="text-center md:text-left text-3xl md:text-5xl text-primary-500 font-bold mb-8">Welcome to Strix!</h1>

            <p className="text-center md:text-left text-md md:text-xl text-neutral-200 leading-normal mb-10">
              One of the only optimized RLCraft servers out there, little to no management and quality of life changes.
            </p>

            <div className="flex flex-col md:flex-row items-center">
              <button className="inline-flex items-center text-primary-050 font-medium text-lg border-2 border-primary-500 px-3 py-1 rounded-full mr-0 md:mr-5">
                IP: play.strix.gg
              </button>

              <a href="https://strix.gg/discord" className="inline-flex items-center text-primary-050 font-medium text-lg px-3 py-1">
                Discord
              </a>
            </div>
          </div>

            <div className="order-1 md:order-2 md:w-1/3 text-center md:mb-6 w-full h-full">
                <img src="/static/strix_logo_solid.svg" alt=""/>
            </div>

        </div>
      </section>

    </div>
);

export default Home
