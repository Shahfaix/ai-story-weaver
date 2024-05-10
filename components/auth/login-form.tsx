"use client";
import React from 'react'
import CardWrapper from './card-wrapper';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { LoginSchema } from '@/schema';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { FcGoogle } from 'react-icons/fc';



const LoginForm = () => {
    const [loading, setloading] = useState(false);
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {

            email: "",
            password: "",


        },
    })
    const onSubmit = () => {
        setloading(false);
        console.log("submitted")
    };
    const { pending } = useFormStatus();
    return (
        <CardWrapper
            label="Login to your account"
            title="Login"
            backButtonHref="/auth/signUp"
            backButtonLabel="Don't have an account?Signup here"

        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-6'>

                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input  {...field} type="email" placeholder="enter your email" />
                                    </FormControl>
                                    <FormMessage />


                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input  {...field} type="password" placeholder="enter your password" />
                                    </FormControl>
                                    <FormMessage />


                                </FormItem>
                            )} />



                    </div>

                    <Button className='w-full' asChild >
                        <Link href="/homePage">
                        {loading ? "loading..." : "Login"}

                        </Link>
                         </Button>

                         <div className='flex  items-center justify-center'>
                           <h1> Or</h1>
                         
                         </div>
                         <div >
                         <Button variant="secondary" className='rounded w-full'>
                            <div className='flex flex-row space-x-2 items items-center justify-center'>
                            <span >  Continue with </span>
                           <FcGoogle />
                            </div>
                            
                        

                           </Button>
                         
                         </div>

                </form>

            </Form>

        </CardWrapper>
    )
}

export default LoginForm