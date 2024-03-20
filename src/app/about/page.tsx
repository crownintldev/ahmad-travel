import AboutInfo from '@/components/About/AboutInfo'
import HappyClient from '@/components/About/HappyClient'
import ChooseUs from '@/components/ChooseUs'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'
import aboutimage from '../../../public/assets/images/about.png'

const About = () => {
  return (
    <>
    <HeadPage
        className='bg-abouthead'
        title='About'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='About'
    />
    <AboutInfo
    title={"About us"}
    image={aboutimage}
      para1={"Crown International Travels (Pvt)Ltd. was Established in 1990 by Mr. Nazir Ahmed(Late), our family-run company has been providing a variety of travel and tourismservices for more than 34 years. In 2007, Crown International Travels was becomeprivate limited company. As IATA Travel Agency We are authorized to announcethat Crown International Travels provides doorstep service at the lowest ratespossible for all Kind of international & Domestic Airline Tickets."}
      mid={"At Crown International Travels, We Are Proud To Be An Authorized Malaysia VisaApplication Centre, Vietnam Embassy Drop Box Holder and Indonesia EmbassyDrop Box Holder. This Means That The Embassy authorizes us To Accept Visa Applications And Submit Them To The Embassy On Behalf Of Our Clients."}
      para3={"We have a well-coordinated team of professionals who are experienced andcompetent to provide quality services to our clients at their doorsteps, and that isthe reason that we have won the trust and commendations of our clients. CrownInternational Travels is an experienced, locally owned and operated, independentHajj & Umrah, Rent a Car, Air Ticketing, and Travel Insurance Company that offersbetter price selections and ultimate services that always exceed customers’expectations. Crown International Travels offers all types of cars, hi-aces, andcoasters on an hourly daily, monthly, and yearly basis. We are providing tourpackages to our esteemed customers desiring to explore UAE, Turkey, Thailand,Malaysia, Indonesia, Singapore, Vietnam, Brazil and Egypt. Because of our outclassservice, our clients are increasing day by day demanding tour packages for otherdestinations as well."}
      w1title={"Mission"}
      words1={`Providing exceptional customer service: We understand that travel can be complicated and overwhelming, so we strive to make the process as smooth and easy as possible. Our team of experienced travel experts is available to assist our clients at every step of their journey, from planning to booking to post-travel support. Offering a wide range of travel options: We believe that everyone's travel needs and preferences are unique, so we offer a variety of travel options to suit different tastes and budgets. Whether our clients are looking for a luxurious cruise, a budget-friendly backpacking trip, or anything in between, we have something for everyone. Promoting sustainable and responsible travel: We recognize the impact that travel can have on the environment and local communities, and we are committed to promoting sustainable and responsible travel practices. We work with our clients to minimize their ecological footprint and to support local economies and cultures. Building long-term relationships with our clients: We value our clients' trust and loyalty, and we aim to build long-term relationships with them based on mutual respect and understanding. We strive to exceed our client’s expectations and to provide them with memorable travel experiences that they will cherish for years to come.`}
      w2title={"Vision"}

      words2={`Delivering exceptional travel experiences: We strive to create travel experiences that are unique, memorable, and tailored to our clients' individual preferences and needs. We are passionate about helping our clients discover new destinations, cultures, and ways of life, and we are dedicated to making their travel dreams a reality. Embracing sustainable travel practices: We recognize the impact that travel can have on the environment and on local communities, and we are committed to promoting sustainable and responsible travel practices. We work with our clients to reduce their ecological footprint and to support local economies and cultures. And We are working on our technology department so, in future our vision is to provide travel services to our customers using technology.Empowering our clients with knowledge and resources: We believe that education and awareness are key to promoting responsible and sustainable travel. We strive to provide our clients with the knowledge, resources, and tools they need to make informed decisions about their travel and to minimize their impact on the environment and on local communities. Building longterm relationships with our clients: We value our clients' trust and loyalty, and we aim to build long-term relationships with them based on mutual respect and understanding. We believe that travel is a journey of self-discovery and personal growth, and we are committed to supporting our clients' travel aspirations and goals.`}
    />
    <HappyClient/>
    <ChooseUs/>
    </>
  )
}

export default About