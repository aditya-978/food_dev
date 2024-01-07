import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyOrder() {
    const [orderData, setOrderData] = useState("");
  return (
    <>
        <div>
            <Navbar/>
        </div>
        {/* <div className='container'>
            <div className='row'>
                {orderData.length !== 0 ? Array(orderData).map(data =>{
                    return(
                        data.orderData ? data.orderData.order_data.slice(0).reverse().map((item)=>{
                            return(
                                item.map((arrayData)=>{
                                    return(
                                        <div>
                                            {arrayData.Order_date? <div className='m-auto mt-5'>{data = arrayData.Order_date}<hr/></div>:
                                            <div className='col-12 col-md-6 col-lg-3'>
                                                <div className='card mt-3' style={{width: '16rem', maxHeight:'360px'}}>
                                                    <div className='card-body'>
                                                        <h5 className='card-title'></h5>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>
                                    )
                                })
                            )
                        })
                    )
                })}
            </div>
        </div> */}
        <div>
            <Footer/>
        </div>
    </>
  )
}
