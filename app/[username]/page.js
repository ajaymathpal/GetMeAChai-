import PaymentPage from '@/components/PaymentPage'
import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      {/* {params.username} */}
      <PaymentPage username={params.username}/>
    </>
  )
}

export default Username
