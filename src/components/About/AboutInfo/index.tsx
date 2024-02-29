import Image from 'next/image'
import React from 'react'
import aboutimage from '../../../../public/assets/images/about.png'
import { Para14, Para16, Para18 } from '@/components/Common/Paragraph'
import { HeadingH1, HeadingH6 } from '@/components/Common/Heading'
import { IoMdArrowDroprightCircle } from 'react-icons/io'

const point =[
    {id:1, text:"All placges and activiates are carefully picked by us."},
    {id:2, text:"Established Experience"},
    {id:3, text:"Wide Range of Services"},
    {id:4, text:"Customized Travel Solutions"},
    {id:5, text:"Global Network"},
]

const AboutInfo = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 container mt-10 lg:mt-32 justify-items-center'>
            <div className='space-y-4 mb-10 md:mb-0 flex flex-col justify-center'>
                 <Para18 className='font-fam text-primary-orange-300 font-bold  ' title='ABOUT US'/>
                 <hr className='border-2 border-primary-orange-300 w-20'/>
                 <div>
                    <HeadingH1  title='We are Professional '/><br/>
                 <HeadingH1  title='Planners For your '/>

                 </div>
                 

                 <div className='flex flex-wrap'>
                    <div className='w-1/12 hidden md:block'>
                    <hr className='border-2 border-primary-orange-200 w-14 mt-5'/>
                    </div>
                    <div className='w-full md:w-11/12 p-1 md:p-4 space-y-4'>
                        <Para14 title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do'/>
                        <HeadingH6 className='text-primary-orange-300' title='Speak to our Destination Experts at Direct Call +92 328 0143786'/>
                    </div>
                 </div>
                 {
                    point.map((item, index) => (
                        <div className='flex gap-2 items-center' key={index}>
                        <IoMdArrowDroprightCircle  size={25} className='text-primary-orange-200'/>
                        <Para16 title={item.text}/>
                        </div>
                    ))
                 }
               

            </div>
            <Image className='bg-cover' src={aboutimage} width={500} height={500} alt='Image'/>
        </div>
    </>
  )
}

export default AboutInfo