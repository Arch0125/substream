import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import CardSection from '../components/CardSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SubStream</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' flex flex-col w-screen h-screen bg-black text-white p-14 items-center justify-center ' >
        <p className='text-[3vmax] font-bold'>SubStream</p>
        <p className='text-3xl font-thin'>Simple way to buy, share and launch subscriptions using crypto</p>
      </div>
      <div className=' flex flex-col w-screen h-fit bg-black text-white p-14 items-center justify-center ' >
        <CardSection/>
      </div>
    </>
  )
}
