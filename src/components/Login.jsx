import React from 'react'
import LoginContainer from '../Form/LoginContainer'
import bgImage from '../assets/mindsparks.png'

const s = () => {
  return (
    <div className='w-full h-screen relative'>
      <img className='w-full h-full object-cover brightness-[10%]' src={bgImage}/>
      <LoginContainer/>
    </div>
  )
}

export default s