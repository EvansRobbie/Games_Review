import React, { useState } from 'react'
import { useGameContext } from '../context/GamesContext'
import LazyLoad from 'react-lazy-load'

const Games = () => {
    const {data} = useGameContext()
    const [isHovered, setIsHovered] = useState(false);
    const gameElement = data?.map((games, index)=>{
        const {id, title, thumbnail, short_description: desc, release_date} = games
        const videoPlayback = thumbnail?.replace('thumbnail.jpg','videoplayback.webm')
        // console.log(videoPlayback)
        return (
            <div key = {id} 
            onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            className={`min-w-[46vw] bg-secondary sm:min-w-[40vw] md:min-w-[30vw] lg:min-w-[23vw] xl:min-w-[20vw] min-h-[40vh] md:min-h-[50vh] border-2 border-secondary hover:shadow-secondary hover:border-slate-200 shadow-xl rounded-2xl overflow-hidden border-slate-200 duration-500 ease-in ${index === 0 ? "col-span-1 row-span-3" : "col-span-1 row-span-4"}`}>
                <div className='w-full h-full relative'>
                    <img className='w-full h-full object-cover' src={thumbnail} alt="" />
                    
                    {thumbnail && isHovered && <div className='absolute top-0 left-0 cursor-pointer w-full h-full opacity-0 hover:opacity-100 hover:z-20'>
                    <LazyLoad once={true} height={'100%'}>

                   <video className='w-full h-full object-cover' src={videoPlayback} autoPlay={true} loop={true} muted={true} />
                   </LazyLoad>
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