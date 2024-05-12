import { SignUp } from '@clerk/nextjs'
import React from 'react'

const signIn = () => {
    return (
        <div className='flex  justify-center items-center h-screen w-full'><SignUp path='/sign-up' /></div>
    )
}

export default signIn