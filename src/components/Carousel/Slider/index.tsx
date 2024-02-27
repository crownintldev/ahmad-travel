"use client"
import { HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"


interface Destination {
  href: string;
  image: StaticImageData;
  title: string;
  description: string;
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
     <div ref={ref} className="keen-slider flex overflow-hidden">
      
      { 
     destinations.map((array,index)=>(
      
  <Link href={"/"} className="grid keen-slider__slide" key={index}>
        <Image className='"w-full h-96 object-cover object-center rounded-md shadow-md' src={array.image} height={600} width={600} ></Image>
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-3 rounded-md shadow-md border-b">
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