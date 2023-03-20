import React, { createContext, useContext} from 'react'
import { useQuery } from 'react-query'
import Axios from 'axios'

const GamesContext = createContext()

const GamesContextProvider = ({children}) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd467fd09camsh430845a00feb1bdp17a9f2jsna94a59553031',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    const fetchGames = async () =>{
        //  {credentials: 'omit'} is to indicate wheather a cookie is set for a cross site context
     const response = await Axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options,  {credentials: 'omit'})
    // return a promise
    return response.data
    }
    const { data, isLoading} = useQuery('games', fetchGames)

    //  
  return (
    <GamesContext.Provider value={{data}}>
        {children}
    </GamesContext.Provider>
  )
}
export const useGameContext = () =>{
    return useContext(GamesContext)
}
export default GamesContextProvider