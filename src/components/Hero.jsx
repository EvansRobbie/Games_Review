import React, { useState } from 'react'
import { useGameContext } from '../context/GamesContext'
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazy-load'
const Hero = () => {
    const { data } = useGameContext()
    const [videoError, setVideoError] = useState(false)
    // from the data get a random game
        const game = data && data[Math.floor(Math.random() * data.length)]
        // create a video playback by replacing the image url thumbnail from having a thumbnail.jpg to having videoplayback.webm at the end
        const videoThumbnail = game?.thumbnail.replace('thumbnail.jpg','videoplayback.webm' )
        // console.log(videoThumbnail  )
        const handleError = () =>{
            setVideoError(true)
        }

        const slideAnimation = {
            hidden: {x: -50, opacity:0},
            visible: {
                x: 0, 
                opacity: 1,
                transition:{
                    duration: 1
                }
            }
        }
        const buttonVariant = {
            hidden: {x: -50, opacity:0},
            visible: {
                x: 0, 
                opacity: 1,
                transition:{
                    duration: 2,
                    delay: 0.2
            }
        }
        }
        const paragraphVariant = {
            hidden: {x: -50, opacity:0},
            visible: {
                x: 0, 
                opacity: 1,
                transition:{
                    duration: 3,
                    delay: 0.4
            }
        }
        }
        return (
        
    <div className='w-full h-[85vh] relative'>
        <div className='absolute w-full h-[85vh] bg-gradient-to-r from-primary '/>
        
        {
            !videoError ? 
            <LazyLoad once = {true} height={'100%'}>
            <video 
                className='w-full h-full object-cover'
                src={videoThumbnail} 
                loop={true}
                autoPlay= {true}
                preload='auto'
                muted={true}
                onError= {handleError}
            />
            </LazyLoad> : 
            <img
                className='w-full h-full object-cover' 
                src={game?.thumbnail} 
                alt={game?.title}
            />
         }
        <div className='absolute w-full h-full justify-center  items-start flex flex-col top-[25rem] md:top-[30rem] lg:top-[20rem] left-[50%] md:left-[30%] lg:left-[25%] xl:left-[20%] translate-x-[-50%] translate-y-[-50%] px-4 max-w-[500px]  duration-300 ease-in'>
            <motion.h1
             className='text-4xl md:text-5xl font-nerko  font-bold text-slate-200 capitalize'
             variants={slideAnimation}
             initial='hidden'
             animate = 'visible'
             transition={{delay:0.4}}
             >
                {game?.title}
            </motion.h1>
            <motion.div 
            className=''
            variants={buttonVariant}
            initial='hidden'
            animate = 'visible'
            transition={{delay:0.4}}
            

            >
                <motion.button 
                whileTap= {{scale: 1.2}}
                className='font-comfortaa'>
                    Review
                </motion.button>
            </motion.div>
            <motion.p 
            className='font-medium text-base font-comfortaa md:text-lg text-slate-200/90 '
            variants={paragraphVariant}
            initial='hidden'
            animate = 'visible'
            transition={{delay:2.0}}
            >
               Welcome to our gaming website, where we provide the latest news, reviews, and insights on all things gaming. Whether you're a die-hard console gamer or a mobile game enthusiast,
                we've got you covered with our in-depth articles and expert analysis. Join our 
                community of gamers today and stay up to date with the latest trends and developments in the gaming world!
            </motion.p>
        </div>
    </div>
  )
}

export default Hero