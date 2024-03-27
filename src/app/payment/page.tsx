import HeadPage from '@/components/Common/HeadPage'
import PaymentDetail from '@/components/Payment/PaymentDetail'
import React from 'react'

const Company_Policy:React.FC = () => {
  return (
    <>
    <HeadPage
      className='bg-contacthead'
      title='Company Policy'
      text='We Are The World Best Travel Agency Company'
      bredcrumb='Company_Policy'
    />
    <PaymentDetail/>
    </>
  )
}

export default Company_Policy