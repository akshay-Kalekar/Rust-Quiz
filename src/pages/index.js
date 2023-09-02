import Image from 'next/image'
import Link from 'next/link'
import { Bruno_Ace, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen  `}
    >
    <div className='flex flex-col   p-24 ${inter.className} min-h-[80vh] items-center  justify-between'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Original_Ferris.svg/320px-Original_Ferris.svg.png'/>
    <h1 className='text-8xl '> RUST - QUIZ</h1>
    <p className='italic p-2 underline'> Let's test your knowledge</p>
    <Link href='./rustQuiz' className='rounded bg-[#FC2B2B] px-8 py-2 hover:bg-[#a42828] hover:border text-2xl ' > Let's Start</Link>
    </div>
    </main>
  )
}
