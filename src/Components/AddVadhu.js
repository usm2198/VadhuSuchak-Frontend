import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddVadhu() {
  const [vadhu,setVadhu] = useState({vadhuSuchakKendra:"",name:"",dob:"",mobileNo:"",address:"",review:""})
  const navigate = useNavigate()

  function handleChange(e) {
    setVadhu({...vadhu,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    postVadhu()
  }

  async function postVadhu() {
    try {
      const {data} = await axios.post('https://vadhu-suchak-api.onrender.com/api/vadhu',vadhu)
      if (!data.errors) {
      alert('New Vadhu added successfully')
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
         <div className="card p-2 shadow-lg rounded-5">
         <h4 className='text-center text-light'>Add Vadhu Information</h4>
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter vadhuschak kendra' name='vadhuSuchakKendra' />
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter vadhu name' name='name' />
            <input onChange={handleChange} type="date" className="form-control my-1" placeholder='enter date of bith' name='dob' />
            <input onChange={handleChange} type="number" className="form-control my-1" placeholder='enter mobile No' name='mobileNo' />
            <textarea onChange={handleChange} type="text" className="form-control my-1" placeholder='enter address' name='address' />
            <input onChange={handleChange} type="text" className="form-control my-1" placeholder='enter review ' name='review' />
           <div className='text-center'><input type="submit" value="Save" className="btn btn btn-dark" /></div> 
          </form>
         </div>
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>
  )
}

export default AddVadhu
