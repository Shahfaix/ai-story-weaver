import React from 'react'
import {UserResource} from "@clerk/types"
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
interface HeaderProps{
    user : UserResource  | null |undefined ;
}

const header = ({user}:HeaderProps) => {
  return (
    
      

      <div className='flex flex-row gap-2'>
      <h1 className='hover:underline'>
        <Link href = "">
        {user?.username}
        </Link>

      
      </h1>
      <UserButton afterSignOutUrl='/'/>
      </div>
    
  
  )
}

export default header