import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import  './login.css';
import FirstPage from '../../Dashboard/HomeFile/FirstPage';
import Home from '../../Dashboard/HomeFile/Home';

const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })


    const onLogin = async (e) => {
        console.log(user)
        e.preventDefault()
        try {
            const result = await axios.post("https://newsfeedapplication.azurewebsites.net/api/Authenticate/login", user);
            console.log(result.data.token)
            localStorage.setItem('user', JSON.stringify(result.data.token))
            localStorage.setItem('userName', JSON.stringify(result.data.user))
            navigate("/mainpage")
        } catch (err){
            console.log(err)
            navigate("/")
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    return (
        
        <>
        <center>
        <Home/>
            <Form onSubmit={onLogin} className='www'>
                <h1>Login</h1>
                <Form.Group  >
                    <Form.Control name='username' type="text" placeholder="Enter UserName" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>if you dont have an Account  <a href="/Register">Register</a></p>

            </Form>
            
            </center>
        </>
    )
}

export default Login