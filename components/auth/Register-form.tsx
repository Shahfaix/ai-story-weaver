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
import { registerSchema } from '@/schema';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { FcGoogle } from 'react-icons/fc';



const RegisterForm = () => {
    const [loading, setloading] = useState(false);
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",

        },
    })
    const onSubmit = () => {
        setloading(false);
        console.log("submitted")
    }
    const { pending } = useFormStatus();
    return (
        <CardWrapper
            label="Create an account"
            title="Register"
            backButtonHref="/auth/login"
            backButtonLabel="Aleady have an account?Login here"

        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-6'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input  {...field} type="String" placeholder="enter your name" />
                                    </FormControl>
                                    <FormMessage />


                                </FormItem>
                            )} />
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

                        <FormField
                            control={form.control}
                            name='Confirmpassword'
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input  {...field} type="password" placeholder="re-enter your password" />
                                    </FormControl>
                                    <FormMessage />


                                </FormItem>
                            )} />




                    </div>

                    <Button className='w-full' asChild >
                        <Link href="/homePage">
                            {loading ? "loading..." : "Register"}

                        </Link>



                    </Button>




                </form>

            </Form>

        </CardWrapper>
    )
}

export default RegisterForm