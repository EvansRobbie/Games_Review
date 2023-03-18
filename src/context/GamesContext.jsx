import React, { createContext, useContext} from 'react'
import { useQuery } from 'react-query'
import Axios from 'axios'

const GamesContext = createContext()

const GamesContextProvider = ({children}) => {
    const options = {
        method: 'GET',
        headers: {
            
        }
    };
    
    const fetchGames = async () =>{
     const response = await Axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
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