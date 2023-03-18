import { useState } from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Hero, Navbar, Games } from './components'
import GamesContextProvider from './context/GamesContext'

//  create an instance of our client query
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GamesContextProvider>
        <Navbar/>
        <Hero/>
        <Games/>
      </GamesContextProvider>
    </QueryClientProvider>
      
  )
}

export default App
