import React, { FC } from 'react';
import Link from 'next/link';
import { HeadingH6 } from '../Heading';
import { Para12 } from '../Paragraph';
import { Aboutcore } from '@/components/Constant';

interface MegaDataProps {
  onLinkClick?: () => void;
}

const MegaData: FC<MegaDataProps> = ({ onLinkClick }) => {
  return (
    <>
      {
        Aboutcore.service.map((array ,index)=>(
          <div key={index} >
          <Link className='' href={`${array.ref}`} >
            <div className="flex flex-col sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0   duration-300 transition gap-3  rounded-md hover:bg-primary-orange-300 hover:text-white px-2 py-2">
              <div>
              <HeadingH6 title={array.title}/>
              <Para12 title={array.para}/>
              </div>
            </div>
          </Link>
      </div>
        ))
      }
   
        
   
    </>
  )
}

export default MegaData