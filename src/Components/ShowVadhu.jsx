import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ShowVadhu() {
    const [vadhus, setVadhus] = useState([])
    const navigate = useNavigate()


    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = vadhus.filter((el) => {
                return el.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setVadhus(results)
        } else {

            // If the text field is empty, show all users
        }
    }

    async function getVadhu() {
        try {
            const { data } = await axios.get('https://vadhu-suchak-api.onrender.com/api/vadhu')

            setVadhus(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    function editData(el) {
        navigate('/update-vadhu', { state: el })
    }

    async function deleteVadhu(id) {
        var result = confirm("Want to delete?");
        if (result) {
            try {
                const { data } = await axios.delete(`https://vadhu-suchak-api.onrender.com/api/vadhu/${id}`)
                if (!data.errors) {
                    alert('Vadhu deleted successfully')
                }
                getVadhu()
            } catch (error) {
                console.log(error.message);
            }
        }

    }



    useEffect(() => {
        getVadhu()
    }, [])

    return (
        <div className='container mt-5'>
            <div className="card my-5 p-2 rounded-5 shadow-lg">
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <input onChange={filter} type="search" className='form-control my-3' placeholder='search vadhu name' />
                        <h3 className='text-center'>Vadhu List</h3>
                        <table className="table">
                            <thead>
                                <tr className='table-light'>
                                    <th>VadhuSuchakKendra/वधुशुचक्केंद्र</th>
                                    <th>Name/नाव</th>
                                    <th>Date of Birth/जन्म तारीख</th>
                                    <th>Mobile No/फोन</th>
                                    <th>Address/पत्ता</th>
                                    <th>Review/
                                        प्रतिक्रिया</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody className='table-light'>
                                {vadhus.map(el => (
                                    <tr key={el._id}>
                                        <td>{el.vadhuSuchakKendra}</td>
                                        <td>{el.name}</td>
                                        <td>{el.dob}</td>
                                        <td>{el.mobileNo}</td>
                                        <td>{el.address}</td>
                                        <td>{el.review}</td>
                                        <td><button onClick={() => {
                                            editData(el)
                                        }} className="btn btn-dark">Edit</button></td>
                                        <td><button onClick={() => {
                                            deleteVadhu(el._id)
                                        }} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default ShowVadhu