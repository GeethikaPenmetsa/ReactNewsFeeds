import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Home from '../../Dashboard/HomeFile/Home';

const Register = () => {
    const navigate = useNavigate()
    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    })


    const OnRegister = async (e) => {
        console.log(register)
        e.preventDefault()
        try {
            const result = await axios.post("https://newsfeedapplication.azurewebsites.net/api/Authenticate/register", register);
            console.log(result)
            navigate("/login")
        } catch (err) {
            console.log(err)
            navigate("/register")
        }
    }

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    } 

    return (
        <>
        <Home/>
            <center>
                <Card.Title>Register</Card.Title>
                <Card.Body>
                    <Form onSubmit={OnRegister}>
                        <Form.Group className="mb-3">
                            <Form.Control name='username' type="text" placeholder="Enter UserName" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control name='password' type="Password" placeholder="Enter Password" onChange={handleChange} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control name='role' type="text" placeholder="Enter role" onChange={handleChange} />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p>if you Already have an Account <a href="/Login">Login</a></p>
                    </Form>
                </Card.Body></center>
            
        </>
    )
}

export default Register