import * as z from "zod";
export const registerSchema=z.object({
    name: z.string().min(2, {
        message: "enter your name",
      }),
      email: z.string().email( {
        message: "enter a vaild email",
      }),
      password: z.string().min(6, {
        message: "pass must be atleast 6 letters long",
      }),
      confirmpassword: z.string().min(6, {
        message: "pass must be atleast 6 letters long",
      }),
})

export const LoginSchema=z.object({
  
      email: z.string().email( {
        message: "enter a vaild email",
      }),
      password: z.string().min(6, {
        message: "pass must be atleast 6 letters long",
      }),
     
})