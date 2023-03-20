import React, { useState } from 'react'
import { useGameContext } from '../context/GamesContext'
import LazyLoad from 'react-lazy-load'
import { motion, AnimatePresence } from 'framer-motion'
// animate presence is responsible for detecting when items are being added or removed from the DOM

const Games = () => {
    const {data} = useGameContext()
    const [isHovered, setIsHovered] = useState(false);
    const paragraphAnimation ={
        hidden:{
            y:500,
            opacity: 0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration:2,
            }
        }
    }
    const gameElement = data?.map((games, index)=>{
        const {id, title, thumbnail, short_description: desc, release_date} = games
        const videoPlayback = thumbnail?.replace('thumbnail.jpg','videoplayback.webm')
        // console.log(videoPlayback)
        return (
            <div key = {id} 
            onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            className={`relative group min-w-[46vw] bg-secondary sm:min-w-[40vw] md:min-w-[30vw] lg:min-w-[23vw] xl:min-w-[20vw] min-h-[40vh] md:min-h-[50vh] border-2 border-secondary hover:shadow-secondary hover:border-slate-200 shadow-xl rounded-2xl overflow-hidden border-slate-200 duration-500 ease-in ${index === 0 ? "col-span-1 row-span-3" : "col-span-1 row-span-4"}`}>
                <div className='w-full h-full relative'>
                    <img className='w-full h-full object-cover' src={thumbnail} alt="" />
                    
                    {thumbnail && isHovered && <div className='absolute top-0 left-0  w-full h-full opacity-0 group-hover:opacity-100 group-hover:z-20'>
                    <LazyLoad once={true} height={'100%'}>

                   <video className='w-full h-full object-cover' src={videoPlayback} autoPlay={true} loop={true} muted={true} />
                   </LazyLoad>
                    </div>}
                   
                </div>
                <motion.div 
                
                    className='absolute left-0 -bottom-32 group-hover:cursor-pointer bg-gradient-to-t from-secondary opacity-0 group-hover:opacity-100 group-hover:z-20  w-full h-full px-4 py-3'>
                        <motion.p 
                     variants={paragraphAnimation}
                     initial= 'hidden'
                     animate={isHovered ? "visible" : "hidden"}
                     transition={{delay:2.0}}
                    className='text-slate-200 text-sm md:text-base font-medium'>{desc}</motion.p>
                </motion.div>
            </div>
        )
    })
  return (
    <div className='w-full h-full my-10 max-w-[1200px]  mx-auto px-2'>
        <AnimatePresence key={Math.random()}>

            <div className=' grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {gameElement}
            </div>
        </AnimatePresence>
    </div>
  )
}

export default Games