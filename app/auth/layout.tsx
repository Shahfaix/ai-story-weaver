import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
   <section className='w-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
    <div className='h-screen flex items-center justify-center'>
        {children}
    </div>
   </section>
  )
}

export default AuthLayout