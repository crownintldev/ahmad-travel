"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import { dropIndonesia, track } from '@/components/Constant'
import Itinerary from '@/components/Service/Itinerary'
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const Tracking = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    }
  
  return (
    <>
    <HeadPage
        className='bg-abouthead'
        title='Tracking'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='Tracking'
    /> 
        <label className="mx-auto mt-20 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-xl focus-within:border-gray-300" htmlFor="search-bar">
        <input id="search-bar" placeholder="your Tracking ID" className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
        <button className="w-full md:w-auto px-6 py-3 bg-primary-orange-300 border-primary-orange-300 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
            <div className="relative">
            <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
                </svg>
            </div>
            <div className="flex items-center transition-all opacity-1 valid:"><span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Search
                </span>
            </div>
            </div>
        </button>
        </label>

 <div className='space-y-3 mt-20 max-w-screen-xl mx-auto m-2'>
  {track.length > 0 && track.map((faq, outerIndex) => (
    <div key={outerIndex} className="bg-primary-orange-200 text-black rounded-md duration-500 transition">
      <button
        className="flex justify-between items-center w-full p-3 text-left duration-500 transition"
        onClick={() => toggleAccordion(outerIndex)}
        aria-expanded={openIndex === outerIndex}
      >
        <HeadingH6 className='font-medium' title={faq.title} />
        <IoIosArrowDropdownCircle className={`h-6 w-6 text-white transform transition-transform ${openIndex === outerIndex ? 'rotate-180' : ''}`} />
      </button>
      <div className={`p-5 border-t border-gray-200 transition bg-white shadow-lg duration-500 space-y-3 ease ${openIndex !== outerIndex ? 'hidden' : ''}`}>
        {faq.content.map((item, innerIndex) => (
          <React.Fragment key={outerIndex + '-' + innerIndex}>
            <HeadingH6 title={item.Heading} />
            <Para14 title={item.des} />
          </React.Fragment>
        ))}
      </div>
    </div>
  ))}
</div>
        
    </>
  )
}

export default Tracking