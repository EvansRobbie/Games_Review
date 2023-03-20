import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
 import { Main, Navbar, Details } from './components'

import GamesContextProvider from './context/GamesContext'
import {  Routes, Route } from 'react-router-dom'

//  create an instance of our client query
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GamesContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
       
      </GamesContextProvider>
    </QueryClientProvider>
      
  )
}

export default App
