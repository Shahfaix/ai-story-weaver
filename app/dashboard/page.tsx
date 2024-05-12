
import React from 'react'
import Navbar from '@/components/navbar'
import WriteStory from '@/components/write-srory'



const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        <WriteStory />
      </div>
    </>












  )
}

export default Homepage