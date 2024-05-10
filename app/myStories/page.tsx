import Navbar from '@/components/navbar'
import MyStories from '@/components/my-stories'
import React from 'react'

const Mystories = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
    <MyStories/>
    </div>
   
  
    </>
  )
}

export default Mystories