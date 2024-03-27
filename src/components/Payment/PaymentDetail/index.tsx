import { Para14 } from '@/components/Common/Paragraph'
import Image from 'next/image'
import React from 'react'
import bank1 from '../../../../public/assets/images/bank1.jpg'
import bank2 from '../../../../public/assets/images/bank2.jpg'

const PaymentDetail:React.FC = () => {
  return (
    <>
    <div className='container mt-10 md:mt-32 grid grid-cols-1 md:grid-cols-2 justify-items-center '>
      <Image width={500} height={400} src={bank1} alt='bank'/>
      <Image width={500} height={400} src={bank2} alt='bank'/>

    </div>
    </>
  )
}

export default PaymentDetail