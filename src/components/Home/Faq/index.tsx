
"use client"
import React, { useEffect, useState } from 'react'
import adventure from '../../../../public/assets/images/adventure.svg'
import Image from 'next/image'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { HeadingH6 } from '../../Common/Heading';
import { Para12, Para14 } from '../../Common/Paragraph';

const Faq:React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the rotation based on scroll position
      const newRotation = window.scrollY * 0.3; // Adjust the factor to control the speed of rotation
      setRotation(newRotation);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  const faqs = [
    { title: "What services does Crown Travels offer?", content: "Crown Travels specializes in personalized travel planning and booking services, including flights, accommodations, guided tours, cruise bookings, travel insurance, and special event travel packages." },
    { title: "How can I book a trip with Crown Travels?", content: "You can book a trip with Crown Travels by visiting our website, calling our customer service number, or by visiting our office in person. Our travel experts will assist you in finding the best travel options to suit your needs." },
    { title: "Does Crown Travels offer international travel packages?", content: "Yes, Crown Travels offers a wide range of international travel packages. Whether you're looking for a beach getaway, a cultural excursion, or an adventure tour, we can arrange trips to destinations around the globe." },
    { title: "Can Crown Travels accommodate special travel requests or needs?", content: "Absolutely. We pride ourselves on creating customized travel experiences. Whether you have dietary restrictions, mobility concerns, or special requests, we work to accommodate your needs for a comfortable and enjoyable trip." },
    { title: "What is the cancellation policy at Crown Travels?", content: "Our cancellation policy varies depending on the type of booking and the suppliers' terms. We advise customers to review the terms and conditions at the time of booking, and for added protection, consider purchasing travel insurance through us." },

  ];

  return (
    <>
      <div className='bg-banner1 bg-cover bg-center bg-fixed bg-no-repeat mt-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center container pt-28 pb-28'>
          <div className="flex justify-center items-center " style={{ transform: `rotate(${rotation}deg)` }}>
            <Image src={adventure} width={200} height={200} alt='adventure'/>
          </div>
          <div className='w-full space-y-3 mt-10 md:mt-0'>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-md duration-500 transition">
                <button
                  className="flex justify-between items-center w-full p-5 text-left duration-500 transition"
                  onClick={() => toggleAccordion(index)}>
                  <HeadingH6 className='font-medium' title={faq.title}/>
                  <IoIosArrowDropdownCircle className={`h-6 w-6 text-primary-orange-200 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}/>
                </button>
                <div className={`p-5 border-t border-gray-200 transition duration-500 ease ${openIndex !== index && 'hidden'}`}>
                  <Para14 title={faq.content}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq;
