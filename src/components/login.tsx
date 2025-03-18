import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import BeatLoader from "react-spinners/BeatLoader";
import Error from './error';
import * as Yup from 'yup';


const Login = () => {
   // Define a TypeScript type for errors
   type ErrorType = {
    email?: string;
    password?: string;
   }

    const[formData, setFormData] = useState({email: "" , password: ""});
    const[errors, setErrors] = useState<ErrorType>({});
  

  const handleInputChange = (e)=>{
    const {name, value} = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Creating handleLogin using Yup(a JS Library that helps in form validation)
  const handleLogin = async() => {
    setErrors({}) //error as object
    try {
      const userSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        password: Yup.string() .trim() // Remove whitespace from beginning and end of string
        .required("Password is required") // Set this field to 'required'
        .min(6, 'Must be exactly 6 digits'), // Set maximum string length
    });

    // This will then run all the tests defined within the schema
    await userSchema.validate(formData, {abortEarly: false});
    // api call

    } catch (e) {
      const  newErrors = {};

      e?.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
   
  }

  return (
    <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>to your account if you already have one</CardDescription>
    <Error message={"some error"}/>
  </CardHeader>
  <CardContent className='space-y-2'>
    <div className='space-y-1'>
      <Input name='email' type='email' placeholder='Enter Email' onChange={handleInputChange}></Input>
      {errors.email && <Error message={errors.email}/>}
    </div>
  </CardContent>
  <CardContent className='space-y-2'>             
    <div className='space-y-1'>
      <Input name='password' type='password' placeholder='Enter Password' onChange={handleInputChange}></Input>
      {errors.password && <Error message={errors.password}/>}
    </div>
  </CardContent>
  <CardFooter>
    <Button onClick={handleLogin}>{true? <BeatLoader size={10} color='#36d7b7'/>: "Login"}</Button>
  </CardFooter>
</Card>

  )
}

export default Login