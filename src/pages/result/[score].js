import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

const index = () => {
  const statsStyle = "p-2 bg-red-700 rounded-lg  flex flex-col rounded-md shadow-black shadow-lg";
  const router = useRouter()
  console.log(router.query)
  let {score,total,correct,incorrect,attempt} = router.query
  return (
    <div className='min-h-screen flex justify-center  items-center '>
    <div className='w-[75vw] h-[80vh] flex flex-col gap-6  p-12 ${inter.className} min-h-[80vh]  justify-center'>
    <div className='text-6xl text-center m-2'> Score Card </div>
    <div className='p-4 rounded-lg flex gap-2 justify-between'>
    <div className='text-6xl'> Result </div>
    <div className='text-4xl py-4 bg-white text-black px-16 rounded-md '>{score}/{total*2}</div>
    </div>
    <div className='grid  grid-cols-2 gap-10 text-center text-2xl'>
    <div className={`${statsStyle}`}><div>Correct </div><div>{correct}</div></div>
    <div className={`${statsStyle}`}><div>Incorrect </div><div>{incorrect}</div></div>
    <div className={`${statsStyle}`}><div>Attempt </div><div></div>{attempt}</div>
    <div className={`${statsStyle}`}><div>Total Question </div><div>{total}</div></div>
    </div>
    <div className='text-center flex justify-center '>
    <Link className='bg-[#cf783a] w-3/4  p-2 text-3xl hover:bg-slate-600  rounded-lg text-center' href="/rustQuiz">Retry</Link>
    </div>
    </div>
    </div>
  )
}

export default index