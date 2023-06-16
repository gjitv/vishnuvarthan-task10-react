import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
const EmpListing = () => {
  const navigate=useNavigate()
  const [empdata, setEmpdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/employee")
      .then((res) => {
        setEmpdata(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const empDetails=(id)=>{
    navigate(`/employee/detail/${id}`);

  }
  const empEdit=(id)=>{
    navigate(`/employee/edit/${id}`);
  }
  const empDelete=(id)=>{
    if(window.confirm("Do you want to delete ?")){
      axios.delete(`http://localhost:8000/employee/${id}`)
    .then((res)=>{
      alert("Deleted successfully");
      window.location.reload();
    })
    .catch(err=>{
      console.log(err);
    })
    } 
  }

  return (
    <div className='md:p-16 items-center justify-center  flex flex-col p-5 EmpList'>
      <h2 className='text-bold text-4xl'>EMPLOYEE LISTING</h2>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 mx-2 mt-7 rounded'><a href='#btn-btm'>Move to Bottom</a></button>
      <br/>
      <div>
      <button  id='btn-top' className='bg-green-500 hover:bg-green-700 text-white font-medium py-1 px-4 mx-2 rounded'><Link to="/employee/create">Add new</Link></button>
      </div>
      <br/>
      <div className='md:flex inline-flex flex-row flex-wrap'>
        
          {/* // return <div className='Employee' key={item.id}>
          //   <p>ID: {item.id}</p>
          //   <p>Name: {item.name} </p>
          //   <p>Email: {item.email} </p>
          //   <p>Username: {item.username} </p>
          //   <p>Phone:{item.phone}</p>
          //   <button onClick={()=>{empDetails(item.id)}}>Details</button><br/>
          //   <button onClick={()=>{empEdit(item.id)}}>Edit</button><br/>
          //   <button onClick={()=>{empDelete(item.id)}}>Delete</button>
          // </div> */}
            <div>
         
              <div className=' '>
                  <ul role="list" className='sm:flex flex-wrap md:gap-6 gap-2'>

                  {empdata.map(item => {
                    return <li className='bg-white md:p-6 p-3 my-10 rounded-xl  shadow-md'>
                    
                      <div className='md:p-6 p-3'>
                          <p className='font-medium'> {item.username}</p>
                          <p className='' style={{color:'gray'}}>{item.email}</p>
                          <p className='font-medium' style={{color:'gray'}} >{item.name}</p>
                      </div>
                      <div className='flex flex-row'>
                          <button onClick={()=>{empDetails(item.id)}} className='bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-4 mx-2 rounded'>Details</button>
                          <button onClick={()=>{empEdit(item.id)}} className='bg-red-500 hover:bg-red-700 text-white font-light py-1 px-4 mx-2 rounded'>Edit</button>
                          <button onClick={()=>{empDelete(item.id)}} className='bg-slate-500 hover:bg-slate-700 text-white font-light py-1 mx-2 px-4 rounded'>delete</button>
                      </div>
                    </li>
                     })}
                  </ul>
              </div>
          </div>
       
      </div>
      <button  id='btn-btm' className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 mx-2 rounded'><a href='#btn-top'>Move to top</a></button>
    </div>
  )
}

export default EmpListing