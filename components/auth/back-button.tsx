import React from 'react'
import { Button } from '../ui/button'
import { link } from 'fs'
import Link from 'next/link'
interface BackButtonprops{
    label:String
    href:String
}

const BackButton = ({label,href}:BackButtonprops) => {
  return (
    
        <Button variant="link" className='font-normal w-full' size='sm' asChild>
           <Link href = {href} >
            {label }
           </Link>
        </Button>
    
  )
}

export default BackButton