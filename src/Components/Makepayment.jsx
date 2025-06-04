
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
  const[phone,setPhone]=useState("")
  const{product}=useLocation().state || {}
  const[message,setMessage]=useState("")

  const submit = async(e)=>{
    e.preventDefault()

    setMessage("Please Wait as We Process...")
    const data=new FormData()
    data.append("phone",phone)
    data.append("amount",product.product_cost)

 

    setMessage("Please Complete The Payment in your Phone.")

  }
  return (
    <div className='row justify-content-center'>
      <div className="col-md-4 card shadow p-4">
        <form onSubmit={submit}>
          <h2 className='text-success'>LIPA NA MPESA</h2>
          {message}

          <p>{product.product_name}</p>
          <p>{product.product_cost}</p>

          <input type="tel"
          placeholder='Enter Phone Number'
          className='form-control' 
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}/>
          {/* {phone} */}
          <button type="submit" className="btn btn-outline-success mt-4 px-5">Pay Now 💵</button>
          
        </form>
      </div>
      
    </div>
  )
}

export default Makepayment