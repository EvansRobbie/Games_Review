import React from 'react'
import { useGameContext } from '../context/GamesContext'

const Games = () => {
    const {data} = useGameContext()
    const gameElement = data?.map((games)=>{
        const {id, thumbnail, short_description: desc, release_date} = games
        const videoPlayback = thumbnail?.replace('thumbnail.jpg','videoplayback.webm')
        // console.log(videoPlayback)
        return (
            <div key = {id} className='w-[46vw] bg-secondary sm:w-[40vw] md:w-[30vw] lg:w-[23vw] xl:w-[20vw] h-[40vh] md:h-[50vh] border rounded-xl overflow-hidden border-slate-200'>
                <div className='w-full h-full relative'>
                    <img className='w-full h-full object-cover' src={thumbnail} alt="" />
                    {thumbnail && <div className='absolute top-0 left-0 cursor-pointer w-full h-full opacity-0 hover:opacity-100 hover:z-20'>
                    <video className='w-full h-full' src={videoPlayback} autoPlay={true} loop={true} muted={true} preload='auto'/>
                    </div>}
                </div>
                <div className='w-full h-full px-4 py-3'>
                    <p className='text-slate-900 text-sm '>{desc}</p>
                </div>
            </div>
        )
    })
  return (
    <div className='w-full h-full my-10 max-w-[1200px]  mx-auto px-2'>
        <div className=' grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {gameElement}
        </div>
    </div>
  )
}

export default Games