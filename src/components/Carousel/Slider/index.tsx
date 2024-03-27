"use client"
import { HeadingH5, HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"


interface Destination {
  href?: string;
  image?: any;
  title?: string;
  visatype?: string;
  description: string;
  flag?:any;
}

interface SliderProps {
  destinations: Destination[];
}

const Slider: React.FC<SliderProps> = ({ destinations }) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
    }
    return text;
  };
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
  <>
     <div ref={ref} className="keen-slider flex overflow-hidden mt-10 gap-3">
      { 
     destinations.map((array,index) => (
      
  <Link href={`${array.href}`} className="grid keen-slider__slide relative hover:scale-105" key={index}>
        <Image className='"w-full h-96 object-cover object-center rounded-md shadow-md' src={array.image} height={600} width={600} alt='Image' ></Image>
        <div className=' p-2 rounded-md font-semibold bg-gradient-to-r from-[#FFEF5E] via-[#EBBD45] to-[#D69A00] absolute left-2 top-2'>
          <Para14 title={array.visatype}/>
        </div>
        <div className=' rounded-full  h-16 w-16 absolute right-2 bottom-32'>
          <Image className='rounded-full' width={200} height={200} src={array.flag} alt='flag'/>
        </div>
        <div className="relative px-4 -mt-16  ">
          <div className="bg-primary-orange-200 p-3 rounded-md shadow-md border-b text-white">
            <HeadingH6 className='font-semibold uppercase leading-tight truncate' title={array.title}/>
            <Para14 title={truncateText(array.description, 80)}/>
          </div>
        </div>
    </Link> 
    
       ))
    }
      </div>


    </>
  
  )
}

export default Slider