"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button';
import { FaRegCopy } from "react-icons/fa";

const WriteStory = () => {
    const textAreaRef = useRef(null)
    const [val, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)

    }
    useEffect(() => {
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"

    }
    );
    return (
        <div className='flex items-center justify-evenly w-full px-4 '>
            <div>

                <div className='mt-20'>
                    <div className='text-neutral-950 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 w-[30rem] rounded flex flex-col space-y-2'>

                        <span >Start a story</span>

                        <textarea className='p-1 active:outline-none' placeholder='Write title for the story' ></textarea>

                        <textarea className='p-1  active:outline-none rounded' placeholder='write your story here ' value={val} onChange={handleChange} rows="1" ref={textAreaRef}>


                        </textarea>


                    </div>
                    <div className='flex flex-col'>
                        <div className='mt-2'>
                            <Button className='w-full'>AI Suggestion</Button>
                        </div>

                        <div className='mt-2'>
                            <Button className='w-full' variant={'destructive'}>End Story</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className='mt-12'>
                    <div className='mb-2 flex justify-end'> <FaRegCopy /></div>

                    <div className='text-neutral-950 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-2 w-[30rem] rounded flex flex-col space-y-2'>

                        <span >AI Suggestions</span>



                        <textarea className='p-1 active:outline-none rounded' placeholder='......'>


                        </textarea>
                    </div>
                    <div className='mt-2'>
                        <Button className='w-full'>Accept Suggestions</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WriteStory