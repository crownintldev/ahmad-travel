import { HeadingH3 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import { overviewDetail } from '@/components/Constant'
import React from 'react'
import ServiceTab from '../Servicedetail'
import Tab from '@/components/Tabs'
import Flights from '@/components/DataDisplay/Flights'
import Servicedetail from '../Servicedetail'


const ServiceInfo:React.FC = () => {
  return (
    <>
        <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    overviewDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
        <Tab  className={"mt-10 lg:mt-32"}
        tabsData = {[
          {
            key: '1',
            title: 'Sticker Visa',
            content: <Servicedetail/>,
          },
          {
            key: '2',
            title: 'E-Visa',
            content: <Servicedetail/>,
          },     
        ]}
      />
      <Tab  className={"mt-10 lg:mt-32"}
        tabsData = {[
          {
            key: '1',
            title: 'Day 1 Planning',
            content: <Servicedetail/>,
          },
          {
            key: '2',
            title: 'Day 2 Planning',
            content: <Servicedetail/>,
          },     
        ]}
        />
    </>
  )
}

export default ServiceInfo