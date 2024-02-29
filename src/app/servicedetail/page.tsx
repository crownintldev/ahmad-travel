import MultiImage from '@/components/Carousel/MultiImage'
import HeadPage from '@/components/Common/HeadPage'
import Service from '@/components/Service'
import React from 'react'

const ServiceDetail = () => {
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Service Details'
    text='We Are The World Best Travel Agency Company'
    />
    <Service/>
    </>
  )
}

export default ServiceDetail