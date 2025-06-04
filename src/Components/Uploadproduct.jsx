import React, { useState } from 'react'
import axios from 'axios'


const Uploadproduct = () => {
  const[productname,setProductname]=useState("")
  const[productdescription,setProductdescription]=useState("")
  const[cost,setCost]=useState("")
  const[photo,setPhoto]=useState("")
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const submit=async (e)=>{
    e.preventDefault()
    setLoading("Please wait as we upload...")

   try{
    const data=new FormData()
      data.append("product_name",productname)
      data.append("product_description",productdescription)
      data.append("product_cost",cost)
      data.append("product_photo",photo)
      const response=await axios.post('https://joseph1234.pythonanywhere.com/api/add_product',data)
      setLoading("")
      setSuccess(response.data.success)
   }catch(error){
    setLoading("")
    setSuccess("")
    setError(error.message)
   }
  }

  return (
    <div className='row justify-content-center m-4'>
      <div className="col-md-6 card shadow  p-4">
        <form onSubmit={submit}>
          <h2>Upload Products</h2>
          {loading}
          {success}
          {error}

          <input type="text" placeholder='Product Name'
          className='form-control my-4'
          required
          value={productname} 
          onChange={(e)=>{setProductname(e.target.value)}}/>
          {/* {productname} */}

          <textarea
          placeholder='Product Description'
          className='form-control my-4'
          required
          value={productdescription}
          onChange={(e)=>{setProductdescription(e.target.value)}}/>
          {/* {productdescription} */}

          <input type="number"
          placeholder='Product Cost'
          required
          className='form-control' 
          value={cost}
          onChange={(e)=>{setCost(e.target.value)}}
          />
          {/* {cost} */}

          <label htmlFor="productphoto" className='mt-4'
          >Choose the product photo</label>
          
          <input type="file"
          className='form-control mb-4'
           accept='image/*'
           onChange={(e)=>{setPhoto(e.target.files[0])}}/>
           {/* {photo} */}
           <button type="submit" className="btn btn-primary px-5">
            Upload ➕
           </button>
        </form>
      </div>
    </div>
  )
}

export default Uploadproduct