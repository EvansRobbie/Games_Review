import React from 'react'
import logoGif from '../assets/mindsparks.gif'
import { motion } from 'framer-motion'
const Navbar = () => {
    const slidingEffect = {
        hidden: {x: -50, opacity:0},
        visible: {x:0, opacity:1, transition:{
            duration: 0.5
        }}
    }
    const signupSliding = {
        hidden: {x: 500, opacity:0},
        visible: {x:0, opacity:1, transition:{
            duration: 0.5,
            delay:0.4

        }}
    }
  return (
    <div className='absolute top-0 left-0 w-full h-24 flex px-2 justify-between items-center px- opacity-100 z-20'>
        <motion.div
        variants={slidingEffect}
        initial = 'hidden'
        animate= 'visible'
        className='w-36  '>
            <img 
            className='w-full h-full object-cover '
            src={logoGif} 
           
            />
        </motion.div>
        <motion.ul
        variants={signupSliding}
        initial = 'hidden'
        animate= 'visible'
        className='flex items-center gap-4  h-full'>
            <li className='font-bold font-comfortaa text-lg cursor-pointer text-secondary'>Login</li>
            <li className='w-28 h-10 bg-secondary flex items-center justify-center cursor-pointer rounded-xl text-slate-200 text-base font-comfortaa font-bold'>Register</li>
        </motion.ul>
    </div>
  )
}

export default Navbar