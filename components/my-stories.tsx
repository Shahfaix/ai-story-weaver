import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { RiFileEditFill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
  

const MyStories = () => {
  return (
    <div className=' bg-yellow-100 b flex items-center justify-center w-3/4 '>

  
    <Table>
    <TableCaption className="text-neutral-950">Your Story list .</TableCaption>
    <TableHeader >
      <TableRow >
        <TableHead  className="text-neutral-950">Serial number</TableHead>
        <TableHead className="text-neutral-950">Submit date </TableHead>
        <TableHead className="text-neutral-950">story title</TableHead>
        
        
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">1</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
       
        <FiEdit />

      </TableRow>

      <TableRow>
        <TableCell className="font-medium">2</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
    
        <FiEdit />

      </TableRow>

      <TableRow>
        <TableCell className="font-medium">4</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
       
        <FiEdit />

      </TableRow>
      <TableRow>
        <TableCell className="font-medium">5</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
       
        <FiEdit />

      </TableRow>
      <TableRow>
        <TableCell className="font-medium">6</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
       
        <FiEdit />

      </TableRow>
      <TableRow>
        <TableCell className="font-medium">7</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
       
        <FiEdit />

      </TableRow>
      <TableRow>
        <TableCell className="font-medium">8</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
       
        <FiEdit />

      </TableRow>
    </TableBody>
  </Table>
  </div>
  )
}

export default MyStories