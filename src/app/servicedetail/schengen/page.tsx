 
"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH3, HeadingH4 } from '@/components/Common/Heading'
import ServiecForm from '@/components/Service/serviceForm'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React, { MutableRefObject } from 'react'
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
  } from "keen-slider/react"
  import "keen-slider/keen-slider.min.css"
import { SchengenDetail,  indonesiaimg, } from '@/components/Constant'
import Image from 'next/image'
import { Para14 } from '@/components/Common/Paragraph'
import Tab from '@/components/Tabs'
import Itinerary from '@/components/Service/Itinerary'
import ServiceData from '@/components/Service/servicedata'
  
  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
  ): KeenSliderPlugin {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add("active")
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }

const Schengen = () => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
      })
      const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(instanceRef)]
      )
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Schengen File Processing'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Schengen File Processing'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Schengen File Processing"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>

         <Tab  className={"mt-10 "}
        tabsData = {[
          {
            key: '1',
            title: 'Bussinessman / Self-Employed',
            content: <ServiceData
            data={[
                {
                    title: "Required Documents",
                    des:"Basic Documents", 
                    points:[
                        "Passport Copy (All Passport Required)",
                        "ID Card Copy",
                        "Picture White Background",
                        "FRC / MRC",
                    ]
                },
                {
                    des:"Personal Documents", 
                    points:[
                        "Personal Last 6 month Bank Statement",
                        "Property Documents",
                        "Vehicles Documents",
                    ]
                },
                {
                    des:"Company Documents", 
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]
                },
                {
                    des:"Employment Documents", 
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                },
                {
                    des:"Appointment Charges  & Embassy Fee will be Paid by Customer.", 
                    des2:"For More Info Contact Us:"
                },
            ]}
            />,
          },
          {
            key: '2',
            title: 'For Employee',
            content: <ServiceData
            data={[
                {
                    title: "Required Documents",
                    des:"Basic Documents",
                    points:[
                      "Passport Copy (All Passport Required)",
                      "ID Card Copy",            
                      "Picture White Background",            
                      "FRC / MRC",            
                               

                    ]          
                },
                {
                    des:"Personal Documents",
                    points:[
                      "Personal Last 6 month Bank Statement",            
                      "Property Documents",            
                      "Vehicles Documents",            
                 
                    ]          
                },
                {
                    des:"Company Documents",
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]          
                },
                {
                    des:"Employment Documents",
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                },
                {
                    des:"Appointment Charges & Embassy Fee will be Paid by Customer.",
                    des2:"For More Info Contact Us",
                }
                      
            ]}
            />,
          },  
          
          {
            key: '3',
            title: 'For Student',
            content: <ServiceData
            data={[
                
                {
                    title: "Required Documents",
                    des:"Basic Documents",
                    points:[
                        "Passport Copy (All Passport Required)",
                        "ID Card Copy",
                        "Picture White Background",
                        "FRC / MRC",
                    ]
                },
                {
                    des: "Personal Documents",
                    points:[
                        "Personal Last 6 month Bank Statement",
                        "Property Documents",
                        "Vehicles Documents",
                    ]
                },
                {
                    des: "Company Documents",
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]
                },   
                {
                    des: "Employment Documents",
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                }, 
                {
                    des:"Appointment Charges & Embassy Fee will be Paid by Customer",
                    des2:"For More Info Contact Us"
                }
            ]}
            />,
          }, 
          {
            key: '4',
            title: 'Family Immigrant',
            content: <ServiceData
            data={[
                
                {
                    title: "Required Documents",
                    des:"Basic Documents",
                    points:[
                        "Passport Copy (All Passport Required)",
                        "ID Card Copy",
                        "Picture White Background",
                        "FRC / MRC",
                    ]
                },
                {
                    des: "Personal Documents",
                    points:[
                        "Personal Last 6 month Bank Statement",
                        "Property Documents",
                        "Vehicles Documents",
                    ]
                },
                {
                    des: "Company Documents",
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]
                },   
                {
                    des: "Employment Documents",
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                }, 
                {
                    des:"Appointment Charges & Embassy Fee will be Paid by Customer",
                    des2:"For More Info Contact Us"
                }
            ]}
            />,
          }, 
        ]}
      />
      
             <div className='mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    SchengenDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
     
      <Itinerary
      Itinerayloop={
        [
            {
                title: "Day 1: Arrival in Paris, France",
                content: 
                    "Explore iconic landmarks of Paris, including the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and Champs-Élysées.\nTake a boat cruise along the Seine River."
            },
            {
                title: "Days 2-3: Amsterdam, Netherlands",
                content: 
                    "Visit the Anne Frank House.\nStroll through Jordaan and enjoy the canals.\nExplore the Van Gogh Museum and Rijksmuseum."
            },
            {
                title: "Days 4-5: Berlin, Germany",
                content: 
                    "Visit the Brandenburg Gate, Checkpoint Charlie, and the Berlin Wall.\nExplore Museum Island, including the Pergamon Museum and Neues Museum.\nEnjoy Berlin’s nightlife and local cuisine."
            },
            {
                title: "Days 6-7: Prague, Czech Republic",
                content: 
                    "Discover Prague Castle, Charles Bridge, and the Astronomical Clock.\nTake a boat cruise on the Vltava River.\nIndulge in Czech cuisine like goulash and trdelník."
            },
            {
                title: "Days 8-9: Vienna, Austria",
                content: 
                    "Explore Schönbrunn Palace and Gardens.\nVisit St. Stephen’s Cathedral and the city center.\nAttend a classical music concert or opera."
            },
            {
                title: "Days 10-11: Rome, Italy",
                content: 
                    "Marvel at the Colosseum, Roman Forum, and Palatine Hill.\nExplore Vatican City, St. Peter’s Basilica, and the Vatican Museums.\nEnjoy Italian cuisine like pasta, pizza, and gelato."
            },
            {
                title: "Day 12: Departure from Barcelona, Spain",
                content: 
                    "Visit Gaudí’s works, including the Sagrada Familia and Park Güell.\nStroll along Las Ramblas and the Gothic Quarter.\nEnjoy a farewell dinner with tapas in Barcelona."        
            }
        ]
      }
      />
         </div>
         <div className='md:col-span-1 mt-5 md:mt-0 w-full '>
         <ServiecForm/>
         </div>
     </div>
    </TracingBeam>
    </>
  )
}

export default Schengen   