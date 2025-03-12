import React from 'react'
import banner from '../assets/banner.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Landing = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-4xl lg:text-7xl text-center justify-center text-white text-center font-extrabold'>The only URL Shortner <br /> you&rsquo;ll ever need! 👇</h2>
      <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input type="url" placeholder="Enter your long URL"className='h-full flex-1 py-4 px-4'/>
        <Button type='submit' variant="destructive" className='h-full' >Button</Button>

      </form>
      <img src={banner} alt="banner"  className='w-[200 px] my-15 md:px-11'/>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default Landing