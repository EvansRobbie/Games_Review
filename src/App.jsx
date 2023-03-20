import { lazy, Suspense, useState } from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
 import { Hero, Navbar } from './components'
 const LazyComponent =  lazy(() =>import('./components/Games'))
import GamesContextProvider from './context/GamesContext'

//  create an instance of our client query
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GamesContextProvider>
        <Navbar/>
        <Hero/>
        <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      </GamesContextProvider>
    </QueryClientProvider>
      
  )
}

export default App
