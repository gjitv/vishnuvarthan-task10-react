import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmpCreate = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/employee", {
            id: crypto.randomUUID(),
            name: name,
            username:username,
            email: email,
            phone: phone
        })
        .then((res)=>{
            alert("success");
            navigate("/");
        }      
        )
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        // <div>
        //     <div className='Create'>
        //         <h1>Create new user</h1>
        //         <form onSubmit={handleSubmit}>
        //             <input type='text' required onChange={(e) => setName(e.target.value)} value={name} placeholder='name' /><br />
        //             <input type='email' required onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' /><br />
        //             <input type='text' required onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' /><br />
        //             <input type='text' required onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Phone' /><br />
        //             <button type='submit'>Save User</button>
        //         </form>
        //     </div>
        // </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-xl shadow-xl md:w-96 m-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Create New Employee
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}  method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)} value={username}
                  type="text"
                  required
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)} value={name}
                  required
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)} value={email}
                  autoComplete="email"
                  required
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)} value={phone}
                  type="text"
                  autoComplete=""
                  required
                  className=" w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default EmpCreate