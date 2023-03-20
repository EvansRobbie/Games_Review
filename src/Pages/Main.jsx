import React, { lazy, Suspense } from 'react'
import { Hero} from '../components'
const LazyComponent =  lazy(() =>import('../components/Games'))
const Main = () => {
  return (
    <>
        <Hero/>
        <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </>
  )
}

export default Main