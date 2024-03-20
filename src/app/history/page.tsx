import AboutInfo from '@/components/About/AboutInfo'
import HappyClient from '@/components/About/HappyClient'
import ChooseUs from '@/components/ChooseUs'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'
import Picture1 from '../../../public/assets/images/Picture1.png'

const History = () => {
  return (
    <>
    <HeadPage
        className='bg-abouthead'
        title='History'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='History'
    />
    <AboutInfo
    title={"Company History"}
    image={Picture1}
    para1={"We are a family-owned business, established in 1990 by Mr. Nazir Ahmed (Late), We have been offering a range of travel and tourism services for over 32 years. The journey started with just four people and now we have grown to and now we have grown to More Mature and lot number of staff in counts. In 2007 we expanded our business to a corporate level and registered with many local and international organizations."}
    para2={"In 2010 we were awarded the Sustainable Tourism Award sponsored by the Travel Port. This award recognizes our work in promoting sustainable tourism through an eco-friendly approach."}
    mid={"You may be interested to know about the next generation!!"}
    para3={"My name is Mubashir Nazir. I am the CEO of our family-owned travel company. We’re a leading provider of domestic & international tourism packages and tours for people from all over the world. We’re passionate about what we do and we want to share this passion with you."}
    para4={"Crown International Travels (Pvt) Ltd was founded by my father in 1990, and has been passed down to me as the new generation. I’m proud of how far we’ve come since then, and I’m excited to take Crown International Travels (Pvt) Ltd to the next level!"}
    words={`is established in 2007 as IATA travel Agency. We have authority To issue  Crown International Travels introduces itself as a company which offers lowest available rates on all of our service right on door steps. Crown International Travels is serving its valuable customers since 2007. We are operating from Rawalpindi, Office No F-15 Rizwan Arcade I, Adam Jee Road Saddar, offers its service to all over the Pakistan. Our company serves as a cheap alternative to other high priced companies in Rawalpindi.
    We have a well co-coordinated team of professionals who are experienced and competent to provide quality services to our clients at their doorsteps, and that is the reason that we have won the trust and commendations of our clients. Crown International Travels is an experienced, locally owned and operated, independent Hajj & Umrah, Rent a Car, Air Ticketing and Travel Insurance Company that offers better prices selections and ultimate services which always exceed customers expectations. Crown International Travels offer all types of cars, hi-aces and coasters on hourly daily, monthly and yearly basis.
    We are providing tour packages to our esteemed customers desiring to explore UAE, Turkey, Thailand, Malaysia, Indonesia, Singapore, Vietnam, brazil and egypt. As because of our outclass service our clients are increasing day by day demanding tour packages for other destinations as well.
    We have Visa application center of Malaysia and nominated drop box agent of Vietnam.
    `}
    />
    </>
  )
}

export default History