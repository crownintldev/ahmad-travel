//@ts-nocheck
import React from 'react'
import Logo from '../Common/Logo'
import FooterLink from '../Common/FooterLink'
import footer from '../../../public/assets/images/footer.jpg'
import Image from 'next/image';
import { Para14, Para16 } from '../Common/Paragraph';
import { HeadingH3, HeadingH5, HeadingH6 } from '../Common/Heading';
import Link from 'next/link';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import Theme from '../Theme';

// Define your arrays for the footer
const FooterAbout: FooterLinkItem[] = [
    { title: 'Our Ceo', href: '/ceo' },
    { title: 'Our Compony', href: '/about' },
    { title: 'Our Team', href: '/team' },
    { title: 'Contact', href: '/Contact' },

  ];
  
  const WeOffer: FooterLinkItem[] = [
    { title: 'Our Company', href: '/' },
    { title: 'Our Team', href: '/' },
  ];

const Footer = () => {
  return (
    <>
    <p className='h-[0px] overflow-hidden'>
      <Theme/>
      </p>
    <div className='bg-black text-primary-orange-300 shadow mt-10 md:mt-32 p-2 max-w-screen-md mx-auto rounded-t-lg text-center pb-5 '>
      <HeadingH5 className='mb-5' title={"For any Query & Complain!"}/>
      <Link className='p-2 px-10  bg-gradient-to-r from-[#FFEF5E] via-[#EBBD45] to-[#D69A00] hover:from-[#D69A00] hover:via-[#EBBD45] hover:to-[#FFEF5E] font-semibold text-[18px] rounded-md text-black' href={"tel:03025000666"}>Call Us</Link>
    </div>
    
<footer className='bg-black text-primary-orange-300 pb-5'>
  <div className="container p-2 ">
  <HeadingH6 className='mt-5' title={"Crown International Travels (Pvt) Ltd"}/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 mt-5 gap-0 md:gap-2 justify-start sm:justify-items-center gap-y-3 '>

      <div className='shadow-md rounded-md p-2 md:p-4 bg-primary-orange-400 hover:bg-primary-orange-300 text-black  text- duration-400 transition space-y-3 mb-4 sm:mb-0'>
        <div>
        <Para16 className='font-semibold' title={"Rawalpindi Head Office"} />
        <Para14 title={"Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan"}/>
        </div>

        <div>
        <Para16 className='font-semibold' title={"Phone Number"} />
          <div>
          <Link href={"tel:+923135000666"}>+92 313 5000 666 ( UAN )</Link>
          </div>
          <div>
          <Link href={"tel:+92515511155/56-57"}>+92 51 5511 155 / 56-57</Link>
          </div>
          <div>
          <Link href={"tel:111143111"}>111 143 111 ( UAN )</Link>
          </div>
        </div>

        <div>
        <HeadingH6 title={"Location"} />
          <Link className='text-12 sm:text-14' href={"https://maps.app.goo.gl/4N4kFDrmyYDrH6Ek7"}>https://maps.app.goo.gl/4N4kFDrmyYDrH6Ek7</Link>
        </div>


    </div>
    <div className='shadow-md rounded-md p-2 md:p-4 bg-primary-orange-400 hover:bg-primary-orange-300 text-black duration-400 transition space-y-3 mb-4 sm:mb-0'>
        <div>
        <Para16 className='font-semibold' title={"Karachi Main Office"} />
        <Para14 title={"Plot # 38-C, Office No 1, Main Saba Avenue, Bader Commercial, Phase V, DHA, Karachi, Sindh, Pakistan"}/>
        </div>

        <div>
        <Para16 className='font-semibold' title={"Phone Number"} />
        <div>
          <Link href={"tel:031350006000"}>0313 50006000</Link>
          </div>
          <div>
          <Link href={"tel:+922135244461"}>+92 2135244461</Link>
          </div>
          <div>
          <Link href={"tel:+922135244462"}>+92 2135244462</Link>
          </div>
          <div>
          <Link href={"tel:111 143 111"}>111 143 111 ( UAN )</Link>
          </div>
        </div>

        <div>
        <HeadingH6 title={"Location"} />
          <Link className='text-12 sm:text-14' href={"https://maps.app.goo.gl/csKKhU6c6Qy56hsC8"}>https://maps.app.goo.gl/csKKhU6c6Qy56hsC8</Link>
        </div>


    </div>
 
      <FooterLink title={"We offer"} array={WeOffer} />
      <FooterLink title={"About us"} array={FooterAbout} />   
    </div>

  <div className='w-full h-[3px] m-auto bg-gradient-to-r from-transparent via-white to-transparent'></div>

  <div className=" border-gray-100 pt-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <Link href="/terms" className=" transition hover:opacity-75"> Terms & Conditions </Link>
          </li>

          <li>
            <Link href="/privacypolicy" className=" transition hover:opacity-75"> Privacy Policy </Link>
          </li>
        </ul>

        <p className=" text-xs font-bold sm:mt-0 text-center">
          &copy; 2022. Crown Travels. All rights reserved.
        </p>
        <ul className="flex gap-4 justify-center mt-3 sm:mt-0">
          <li>
          <div className="bg-white group hover:bg-blue-800  shadow-lg rounded-full p-1">
                <Link href="#">
                  <BiLogoFacebook
                    size={25}
                    className=" text-blue-800  group-hover:text-white rounded-full"
                  />
                </Link>
              </div>
          </li>
          <li>
          <div className="bg-gradient-to-br from-gradient-purple to-gradient-pink shadow-lg group text-white rounded-full p-1">
                <Link href="#">
                  <AiOutlineInstagram
                    size={25}
                    className="   group-hover:text-white rounded-full"
                  />
                </Link>
              </div>
          </li>
          <li>
          <div className="bg-white group hover:bg-black shadow-lg rounded-full p-1">
                <Link href="#">
                  <FaXTwitter
                    size={25}
                    className=" text-black  group-hover:text-white rounded-full"
                  />
                </Link>
              </div>
          </li>
          <li>
          <div className="bg-white group hover:bg-blue-800 shadow-lg rounded-full p-1">
                <Link href="#">
                  <AiFillLinkedin
                    size={25}
                    className=" text-blue-800  group-hover:text-white rounded-full"
                  />
                </Link>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
   
</footer>

    </>
  )
}

export default Footer