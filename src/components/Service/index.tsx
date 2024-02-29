import React from 'react'
import MultiImage from '../Carousel/MultiImage'
import ContactForm from '../Contact/ContactForm'
import Button from '../Common/Button'
import { Para14 } from '../Common/Paragraph'
import { HeadingH6 } from '../Common/Heading'
import ServiecForm from './serviceForm'
import ServiceInfo from './ServiceInfo'

const Service:React.FC = () => {
  return (
    <>
    <div className='container grid grid-cols-1 md:grid-cols-5  mt-10 lg:mt-32 gap-5'>
        <div className='col-span-3'>
        <MultiImage/>
        <ServiceInfo/>
        </div>
        <div className='col-span-2 '>
        <ServiecForm/>
        </div>
    </div>
    </>
  )
}

export default Service