import React from 'react';
import banner from '../assets/banner.png';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-4xl lg:text-7xl text-center text-white font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>

      {/* URL Input Form */}
      <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input type="url" placeholder="Enter your long URL" className="h-full flex-1 py-4 px-4" />
        <Button type="submit" variant="destructive" className="h-full cursor-pointer">Shorten</Button>
      </form>

      {/* Banner */}
      <img src={banner} alt="banner" className=" my-15 md:px-11" />

      {/* QNA*/}
      <Accordion type="multiple" className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do I need an account to use the app?</AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How does the URL Shortener work?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a short version of that URL. This shortened URL redirects to the original long URL when accessed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What analytics are available for my shortened URLs?</AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks, and device type (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landing;
