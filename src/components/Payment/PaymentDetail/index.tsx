import Image from 'next/image'
import React from 'react'
import bankalflah from '../../../../public/assets/images/bankalflah.png'
import bankfaisal from '../../../../public/assets/images/bankfaisal.png'

import { HeadingH5 } from '@/components/Common/Heading'
import { Alert } from 'antd'
import Marquee from 'react-fast-marquee'

const accountDetails = [
  {
    heading:"Bank Alfalah Account For Ticketing Payments For Rawalpindi Office",
    title: "CROWN INTERNATIONAL TRAVELS (PVT)Ltd",
    iban1: "00071007032051",
    iban2: "PK86ALFH0007001007032051",
    branch: "The Mall Branch Rawalpindi",
    branchCode: "0007",
    niftCode: "0530201",
    image:bankalflah
  },
  {
    heading:"Bank Alfalah Account For Visa Payments For Rawalpindi Office ",
    title: "CROWN INTERNATIONAL TRAVELS (PVT)Ltd",
    iban1: "00071007068376",
    iban2: "PK78ALFH0007001007068376",
    branch: "The Mall Branch Rawalpindi",
    branchCode: "0007",
    niftCode: "0530201",
    image:bankalflah
  },
  {
    heading:"Faysal Account For Visa Payments For Karachi Office ",
    title: "CROWN INTERNATIONAL TRAVELS (PVT)Ltd",
    iban1: "3005301000005793",
    iban2: "PK68FAYS3005301000005793",
    branch: "IBB The Mall Rawalpindi",
    branchCode: "3005",
    niftCode: "060",
    image:bankfaisal
  },
  // Add more accounts as objects here if necessary
];
const PaymentDetail:React.FC = () => {
  return (
    <>

    <div className='container mt-10 md:mt-32'>
    <Alert
    className='rounded-md p-4  font-bold'
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
<div className=' grid grid-cols-1 md:grid-cols-2 justify-items-center '>
{accountDetails.map((account, index) => (
    <div className='border-2 border-primary-orange-500 p-2 md:p-4 rounded-lg w-full md:w-4/6 space-y-3 mt-5 mb-5'>
  <HeadingH5 className='underline' title={account.heading}/>
      <p className='text-[18px] font-semibold'>Account Title: <span className='text-primary-orange-500'>{account.title}</span></p>
      <p className='text-[18px] font-semibold'>Account Number: <span className='text-primary-orange-500'>{account.iban1}</span></p>
      <p className='text-[18px] font-semibold'>Account With IBAN: <span className='text-primary-orange-500'>{account.iban2}</span></p>
      <p className='text-[18px] font-semibold'>Bank Branch: <span className='text-primary-orange-500'>{account.branch}</span></p>
      <p className='text-[18px] font-semibold'>Branch Code: <span className='text-primary-orange-500'>{account.branchCode}</span></p>
      <p className='text-[18px] font-semibold'>Nift Code: <span className='text-primary-orange-500'>{account.niftCode}</span></p>
  <Image width={500} height={400} src={account.image} alt='bank'/>

</div>
  ))}
</div>



    </div>
    </>
  )
}

export default PaymentDetail