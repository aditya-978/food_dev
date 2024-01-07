import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        geolocation:""
    })
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                location: credentials.geolocation,
                password: credentials.password 
            })
        })
        const json = await response.json()
        console.log(json);
    }
    const onChange = (eve)=>{
        setCredentials({...credentials,[eve.target.name]:eve.target.value})
    }
    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={credentials.email} className="form-control" id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name='name' value={credentials.name} className="form-control" id="exampleInputEmail1" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} id="exampleInputPassword1" onChange={onChange}/>
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to = "/login" className='m-3 btn btn-danger'>Already a User</Link>
                </form>
            </div>
        </div>
    )
}