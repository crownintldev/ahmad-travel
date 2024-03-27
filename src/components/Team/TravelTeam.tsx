import React from 'react'
import { HeadingH3, HeadingH4, HeadingH6 } from '../Common/Heading'
import { Para14 } from '../Common/Paragraph'
import Image from 'next/image'
import { teamcard } from '../Constant'


const TravelTeam:React.FC = () => {
  return (
    <>
        <div className='text-center mt-10 lg:mt-32 space-y-3'>
            <HeadingH3 className='font-fam' title={"Meet Our Team"}/>
            <hr className='border-2 border-primary-orange-300 w-80 mx-auto'/>
        </div>
       


<section className="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
  <div className="flex flex-col gap-6 mt-16">

    {
    teamcard.map((array,index)=>(
      <div className={`flex flex-col md:flex-row gap-6 ${array.className}`} key={index}>
      <div className="w-full lg:w-1/4 rounded-3xl bg-white hover:bg-primary-orange-400 p-2  overflow-hidden duration-300">
        <Image width={300} height={300} src={array.image} alt="Team" className="w-full rounded-3xl h-full object-contain md:object-cover bg-top " />
      </div>
      <div className={`w-full lg:w-9/12  rounded-3xl flex flex-col space-y-3 justify-center p-8 lg:p-14 ${array.boxColor}`}>
        <HeadingH3 title={array.name}/>
        <HeadingH6 title={array.title}/>
        <Para14 title={array.des}/>
      </div>
      </div>
    ))}
 
  </div>
</section>


    </>
  )
}

export default TravelTeam