import Button from '@/components/Common/Button'
import { HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import Link from 'next/link'
import React from 'react'

const ServiecForm = () => {
  return (
    <>

<div className=" shadow-lg rounded-xl p-2 sm:p-3 lg:p-4 w-full text-center ">
        <HeadingH6 className='text-primary-orange-300' title={"Make Your Appointment"}/>
        <div className='text-center mt-5'> 
        <Link href={"/appointment"} className=' bg-primary-orange-300 hover:bg-primary-orange-400 p-2  rounded-md text-white hover:scale-105 duration-300'>Click Here</Link>
        </div>
        <div className="mt-3 text-center">
          
          <Para14 title="We'll get back to you in 1-2 business days."/>
        </div>
    </div>
    
      <div className=" shadow-lg rounded-xl p-2 sm:p-3 lg:p-4 w-full mt-10 ">
        <HeadingH6 className='text-primary-orange-300' title={"Fill in the form for any query"}/>
      <form className='mt-5 w-full'>
        <div className="grid gap-4 lg:gap-6">
          <div className="grid grid-cols-1 space-y-3 ">
            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Full Name</label>
              <input  type="text" name="FullName" id="FullName" placeholder="Full Name" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input  type="email" name="email" id="email" placeholder="Enter Email" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input  type="email" name="email" id="email" placeholder="Enter Email" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
              <input  type="Number" name="Number" id="email" placeholder="Enter Phone Number" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Comment</label>
            <textarea  name="Comment" placeholder='Comment Here' rows={4} className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium outline-none focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"  />
          </div>
        </div>
        <div className='text-center'> 
        <Button className='mt-5 text-white hover:scale-95 duration-300' title="Send inquiry"/>
        </div>
   
      </form>
    </div>
    </>
  )
}

export default ServiecForm