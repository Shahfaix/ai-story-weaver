import React from 'react'
interface AuthHeaderprops{
    label:String 
    title:String
}

const AuthHeader = ({label,title}:AuthHeaderprops) => {
  return (
    <div className='w-ful flex flex-col gap-y-4 items-center justify-center'>
        <h1 className='text-3xl font-semibold'>
            {title}
     

        </h1>
        <p className='text-muted-foreground text-sm'>  {label}</p>
    </div>
  )
}

export default AuthHeader