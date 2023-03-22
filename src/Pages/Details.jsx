import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Axios from 'axios'
import { options } from '../API/Options'


const Details = () => {
  const {id} = useParams()
//   const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'd467fd09camsh430845a00feb1bdp17a9f2jsna94a59553031',
//         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//     }
// };

  const fetchDetails = async () =>{
    
    const response = await Axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    // return promise/closure
    return response.data
  }
  const {data} = useQuery('detail', fetchDetails)

  // console.log(data)
  const background = data?.thumbnail.replace('thumbnail', 'background')
  // console.log(id)
  return (
    <div className='w-full h-screen relative flex flex-col items-center'>
      {/* background */}
      <img
      className='relative w-full h-screen object-cover'
      src={background} alt={data?.title} />
      {/* overlay */}
      <div className='absolute w-full h-full top-0 left-0 opacity-100 z-10 bg-black/80'/>
      <div
     
      className='absolute flex flex-col md:flex-row md:justify-between items-center w-full  gap-4 md:gap-8 top-24 mx-auto h-[85vh] max-w-[1000px] opacity-100 z-20 px-4 md:px-8'>
        {/* image */}
        <div className='w-full h-[25vh] md:h-[30vh] lg:h-[40vh]  rounded-xl shadow-lg shadow-secondary overflow-hidden'>
          <img className='w-full h-full object-cover' src={data?.thumbnail} alt={data?.title} />
        </div>
        {/* description */}
        <div className='py-2 flex flex-col items-center md:max-w-[400px] lg:max-w-[550px]'>
          {/* title */}
          <h1 className='capitalize text-3xl text-info font-comfortaa md:text-4xl md:ml-[-25rem] lg:text-5xl'>{data?.title}</h1>
          {/* descripion */}
          <div className='py-1 md:py-2'>
            <h1 className='text-lg font-medium font-nerko text-info text-center md:text-2xl'>About {data?.title}</h1>
            <p className='text-xs text-info font-comfortaa md:text-sm lg:text-base md:py-3'>{data?.description}</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Details