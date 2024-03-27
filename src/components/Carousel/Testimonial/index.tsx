//@ts-nocheck
"use client"
import { HeadingH1, HeadingH2, HeadingH3, HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import { review } from '@/components/Constant'
import { useKeenSlider } from 'keen-slider/react'
import React, { useEffect } from 'react'

const Testimonial:React.FC = () => {
  useEffect(() => {
    // Dynamically load the Trustmary script
    const existingScript = document.getElementById('trustmary-embed');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'trustmary-embed';
      script.src = 'https://embed.trustmary.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.tmary) {
          window.tmary('app', 'kB5UIHGc8X');
        }
      };
    }
  }, []);
 
  return (
    <>
<div className='container p-2 mt-10 lg:mt-32'>
    <HeadingH3 title={"Customer Review" }/>
    <hr className='w-16 border-2 border-primary-orange-300'/>
    <div className=' bg-black rounded-md mt-10 w-full'>
  
        <div className=' pt-10 pb-10 w-full  flex-col items-center'>
            <div className='text-white md:px-10 md:mx-10 '> 
                <HeadingH2 className='text-primary-orange-300' title={'Dont just take our word for it...'}/>
                <Para14  className='text-primary-orange-300' title={'Crown International Travels became a private limited company'}/>
            </div>
            <div data-trustmary-widget="rNwW-bg-h"></div>
   
        </div>
    </div>
</div>
    </>
  )
}

export default Testimonial