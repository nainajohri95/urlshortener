import React from 'react'
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


const Login = () => {
  return (
    <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>to your account if you already have one</CardDescription>
    <Error message={"some error"}/>
  </CardHeader>
  <CardContent className='space-y-2'>
    <div className='space-y-1'>
      <Input name='email' type='email' placeholder='Enter Email'></Input>
      <Error message={"some error"}/>
    </div>
  </CardContent>
  <CardContent className='space-y-2'>
    <div className='space-y-1'>
      <Input name='password' type='password' placeholder='Enter Password'></Input>
      <Error message={"some error"}/>
    </div>
  </CardContent>
  <CardFooter>
    <Button>{true? <BeatLoader size={10} color='#36d7b7'/>: "Login"}</Button>
  </CardFooter>
</Card>

  )
}

export default Login