import React, { ReactNode } from 'react'
import { HeadingH2, HeadingH3 } from '../Heading'

const HeadPage = ({title, text,className}:{
    title: string;
    text: string;
    className: string;
}) => {
  return (
    <>
  <div className={`${className} relative h-[400px] bg-fixed flex flex-col justify-center items-center bg-no-repeat bg-bottom object-contain`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-orange-200/65 via-primary-orange-200 to-primary-orange-200/5 opacity-75"></div>

      <HeadingH2 className='tracking-widest font-fam text-white z-10' title={title}/>
      <HeadingH3 className='text-white z-10' title={text} />
    </div>
    </>
  )
}

export default HeadPage