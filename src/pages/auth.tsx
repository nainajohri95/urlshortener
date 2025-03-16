import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from '@/components/ui/login';
import Signup from '@/components/ui/signup';


const Auth = () => {
  const[searchParams] = useSearchParams();
  return (
    <div className='flex flex-col items-center gap-10 mt-20'>
      <h1 className='text-5xl font-extrabold'>
        {searchParams.get("createNew")? "Hold Up! Let's login first..": "Login/ Signup"}
      </h1>
      <Tabs defaultValue="Login" className="w-[400px]">
  <TabsList className=' w-full flex'>
    <TabsTrigger value="Login">Login</TabsTrigger>
    <TabsTrigger value="Signup">Signup</TabsTrigger>
  </TabsList>
  <TabsContent value="Login"><Login/> </TabsContent>
  <TabsContent value="Signup"><Signup/></TabsContent>
</Tabs>

    </div>
  )
}

export default Auth