import Image from 'next/image'
import Link from 'next/link'
import { Bruno_Ace, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// Working on Forcing user to be on full screen and if try to break that use quiz is paused and affter 3 warning it restarts

export default function Home() {
  const handleFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
  };

  return (
    <main className={`min-h-screen`}>
      <div className={`flex flex-col p-8 md:p-16 ${inter.className}  items-center justify-between max-h-screen `}>
        <div className='sm:h-2/5 sm:w-fit'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Original_Ferris.svg/320px-Original_Ferris.svg.png' className='hover:animate-pulse delay-100' alt="Ferris Rust Mascot" height={500} width={500} />
        </div>
        <h1 className='text-xl sm:text-6xl md:text-8xl'> RUST - QUIZ</h1>
        <p className='italic p-2 underline text-base sm:text-2xl md:text-4xl'> Let's test your knowledge</p>
        <Link href='/rustQuiz' className='rounded bg-[#FC2B2B] px-8 py-2 hover:bg-[#a42828] hover:border text-2xl'
          onClick={(e) => {
            handleFullScreen();
          }}>
          Let's Start
        </Link>
      </div>
    </main>
  );
}
