import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function UpdateVadhu() {
  const [vadhu,setVadhu] = useState({_id:"",vadhuSuchakKendra:"",name:"",dob:"",mobileNo:"",address:"",review:""})
  const navigate = useNavigate()
  const {state} = useLocation()
  const el = state

useEffect(()=>{
  setVadhu({_id:el._id,vadhuSuchakKendra:el.vadhuSuchakKendra,name:el.name,dob:el.dob,mobileNo:el.mobileNo,address:el.address,review:el.review})
},[])
  
  function handleChange(e) {
    setVadhu({...vadhu,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    putVadhu()
  }

  async function putVadhu() {
    try {
      const {data} = await axios.put(`https://vadhu-suchak-api.onrender.com/api/vadhu/${vadhu._id}`,vadhu)
      if (!data.errors) {
      alert('Vadhu updated successfully')
        }
       navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card p-2 shadow-lg rounded-5 text-white bg-primary">
          <h4 className='text-center text-light'>Update Vadhu Information</h4>

          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter vadhuschak kendra' name='vadhuSuchakKendra' value={vadhu.vadhuSuchakKendra} />
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter vadhu name' name='name' value={vadhu.name} />
            <input onChange={handleChange} type="date" className="form-control my-1" placeholder='enter date of bith' name='dob' value={vadhu.dob} />
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter mobile No' name='mobileNo' value={vadhu.mobileNo} />
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter address' name='address' value={vadhu.address} />
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter review ' name='review' value={vadhu.review} />
           <div className='text-center'><input type="submit" value="Update" className="btn btn btn-dark" /></div> 
            


          </form>
          </div>
          
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>
  )
}

export default UpdateVadhu