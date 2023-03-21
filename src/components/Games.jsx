import React, { useState } from 'react'
import { useGameContext } from '../context/GamesContext'
import LazyLoad from 'react-lazy-load'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
// animate presence is responsible for detecting when items are being added or removed from the DOM

const Games = () => {
    const {data} = useGameContext()
    const [isHovered, setIsHovered] = useState(false);
    const truncate = (str, num) =>{
        if(str?.length > num){
            return str.slice(0, num) + '...' 
        }
        return str
    }
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
    const ReviewButtonVariant = {
        hidden:{
            x:-400,
            opacity:0
        },
        visible: {
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay:0.2
            }
        }
    }
    const playButtonVariant = {
        hidden:{
            x:500,
            opacity:0
        },
        visible: {
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay:0.2
            }
        }
    }
    const gameElement = data?.map((games, index)=>{
        const {id, title, thumbnail, short_description: desc, game_url, release_date} = games
        const videoPlayback = thumbnail?.replace('thumbnail.jpg','videoplayback.webm')
        // console.log(videoPlayback)
        return (
            <div key = {id} 
            onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            className={`relative group min-w-[46vw] bg-secondary hover:scale-105 sm:min-w-[40vw] md:min-w-[30vw] lg:min-w-[23vw] xl:min-w-[15vw] min-h-[40vh] md:min-h-[45vh] border-2 border-[var(--secondary)] hover:shadow-secondary hover:border-slate-200 shadow-xl rounded-2xl overflow-hidden  duration-500 ease-in ${index === 0 ? "col-span-1 row-span-3" : "col-span-1 row-span-4"}`}>
                <div className='w-full h-full relative'>
                    <img className='w-full h-full object-cover' src={thumbnail} alt="" />
                    
                    {thumbnail && isHovered && <div className='absolute top-0 left-0  w-full h-full opacity-0 group-hover:opacity-100 group-hover:z-20'>
                    <LazyLoad once={true} height={'100%'}>

                   <video className='w-full h-full object-cover brightness-50' src={videoPlayback} autoPlay={true} loop={true} muted={true} />
                   </LazyLoad>
                    </div>}
                   
                </div>
                <motion.div 
                
                    className='absolute left-0 -bottom-20 md:-bottom-32 group-hover:cursor-pointer bg-gradient-to-t from-[var(--info)] opacity-0 group-hover:opacity-100 group-hover:z-20  w-full h-full px-4 py-3'>
                        <h1 className='font-extrabold font-nerko uppercase drop-shadow-xl shadow-black text-[1.2rem] md:text-base  '>{title}</h1>
                        <motion.p 
                     variants={paragraphAnimation}
                     initial= 'hidden'
                     animate={isHovered ? "visible" : "hidden"}
                     transition={{delay:2.0}}
                    className='text-slate-200 font-comfortaa text-sm md:text-base font-medium'>
                        {truncate(desc, 60)}
                    </motion.p>
                  <p className='font-medium font-comfortaa text-sm scroll-py-11'>Release Date: <span className='text-slate-200'>{release_date}</span></p>
                    <div className='flex w-full justify-between my-1 gap-2 '>
                        <motion.button
                        variants={ReviewButtonVariant}
                        initial='hidden'
                        animate='visible'
                        whileTap={{scale:1.1}}
                         className=' hover:border-r-8 hover:border-l-8 font-comfortaa duration-500 ease-in border-t-0 border-b-0  bg-gradient-to-tr from-secondary to-[var(--info)]'><Link to ={`/details/${id}`}>Review</Link></motion.button>
                        <motion.button
                        variants={playButtonVariant}
                        initial='hidden'
                        animate='visible'
                        whileTap={{scale:1.1}}
                        className='bg-transparent font-comfortaa text-secondary border border-primary hover:border-secondary hover:border-r-8 hover:border-l-8 hover:text-primary duration-500 ease-in '><a href={game_url} target='_blank' >Play</a></motion.button>
                    </div>

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