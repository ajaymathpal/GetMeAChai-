"use client"
import React , { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/userActions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setpaymentform] = useState({})

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, //Pass the callback URL dynamically
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img className='w-full h-[380] object-cover ' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/17.gif?token-time=1735948800&token-hash=KX4qVFg4ekWS-SzQ0DGj_4Y_vg46_GvEl2KQCtzGpvo%3D' />
                <div className='absolute -bottom-[50px] right-[47%]'>
                    <img className='border rounded-full' width={100} height={100} src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1736726400&token-hash=xZJ3Sv72ZqVKrWQyLa5121RbFRf7Ob3_LcaW4JQmCaI%3D' />
                </div>
            </div>
            <div className='info flex justify-center items-center gap-2 mt-16 flex-col pb-16'>
                <div className='font-bold text-lg'> @{username}</div>

                <div className='text-slate-400'>Creating Animated art for VTT's</div>
                <div className='text-slate-400'>15,600 members . 93 Posts . €15,850/release

                </div>
                <div className='payment flex gap-3 w-[80%] mt-10'>
                    <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
                        <ul className='mx-3 text-lg'>
                            <li className='my-4 flex gap-2 items-center'>
                                <img className=' rounded-full' width={33} src='https://media.lordicon.com/icons/wired/lineal/44-avatar-user-in-circle.gif' />
                                <span>Ajay donated <span className='font-bold'>$30</span> with a message "Lots of 💗"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img className=' rounded-full' width={33} src='https://media.lordicon.com/icons/wired/lineal/44-avatar-user-in-circle.gif' />
                                <span>Ajay donated <span className='font-bold'>$30</span> with a message "Lots of 💗"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img className=' rounded-full' width={33} src='https://media.lordicon.com/icons/wired/lineal/44-avatar-user-in-circle.gif' />
                                <span>Ajay donated <span className='font-bold'>$30</span> with a message "Lots of 💗"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img className=' rounded-full' width={33} src='https://media.lordicon.com/icons/wired/lineal/44-avatar-user-in-circle.gif' />
                                <span>Ajay donated <span className='font-bold'>$30</span> with a message "Lots of 💗"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img className=' rounded-full' width={33} src='https://media.lordicon.com/icons/wired/lineal/44-avatar-user-in-circle.gif' />
                                <span>Ajay donated <span className='font-bold'>$30</span> with a message "Lots of 💗"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img className=' rounded-full' width={33} src='https://media.lordicon.com/icons/wired/lineal/44-avatar-user-in-circle.gif' />
                                <span>Ajay donated <span className='font-bold'>$30</span> with a message "Lots of 💗"</span>
                            </li>
                        </ul>
                    </div>
                    <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>

                            <input onChange={handleChange} value={paymentform.name} name='name' className='w-full rounded-lg bg-slate-800 p-3' type='text' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' className='w-full rounded-lg bg-slate-800 p-3' type='text' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' className='w-full rounded-lg bg-slate-800 p-3' type='text' placeholder='Enter Amount' />
                            {/* <button className='bg-slate-800 p-3 rounded-lg'>Pay</button> */}
                            <button className="relative inline-flex items-center justify-center p-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >Pay</button>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg ' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg ' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg ' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
