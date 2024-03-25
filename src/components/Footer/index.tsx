//@ts-nocheck
import React from 'react'
import Logo from '../Common/Logo'
import FooterLink from '../Common/FooterLink'
import footer from '../../../public/assets/images/footer.jpg'
import Image from 'next/image';
import { Para14, Para16 } from '../Common/Paragraph';
import { HeadingH6 } from '../Common/Heading';
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
    <footer className="relative bottom-0 bg-primary-orange-100 lg:grid lg:grid-cols-5 border-t shadow-md w-full overflow-hidden mt-32">
    <div className="relative block h-32 lg:col-span-2 lg:h-full overflow-hidden">
  <Image
    src={footer}
    layout='fill'
    objectFit="cover"
    alt="footer-image"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-primary-orange-200 to-primary-orange-200/45 opacity-75"></div>
</div>
  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div className='space-y-3'>
        <div>
            <HeadingH6 className='uppercase tracking-wide font-bold' title='Address'/>
            <Para14 className='uppercase font-bold' title={"Rawalpindi Head Office"}/>
            <Link href={"https://maps.app.goo.gl/4N4kFDrmyYDrH6Ek7"}>Office No. 406/7/8 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi,Punjab, Pakistan</Link>
        </div>
        <div>
            <Para14 className='uppercase font-bold' title={"Karachi Branch Office"}/>
            <Link href={"https://maps.app.goo.gl/QNEMH2XEyovoJEg1A"}>Plot # 38-C, Office No 01, Main Saba Avenue, Bader Commercial, Phase V, DHA, Karachi, Sindh, Pakistan</Link>
        </div>
        <div>
            <HeadingH6 className='uppercase tracking-wide font-bold ' title='Call'/>
            <div>
              <Link href={"tel:+92 313 5000 666"}>+92 313 5000 666</Link>
            </div>
            <div>
              <Link href={"tel:+92 51 5511 155 / 56-57"}>+92 51 5511 155 / 56-57</Link>
            </div>
            <div>
              <Link href={"tel:111 143 111"}>111 143 111 ( UAN )</Link>
            </div>
        </div>
        <ul className="mt-8 space-y-1 text-sm ">
          <li>Monday to Saturday: 09am - 8pm</li>
        </ul>
        
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <FooterLink title={"We offer"} array={WeOffer} />
      <FooterLink title={"About us"} array={FooterAbout} />   
      </div>
    </div>
    <div className="mt-12 border-t border-gray-100 pt-12">
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