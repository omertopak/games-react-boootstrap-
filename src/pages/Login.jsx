import React, { useContext } from 'react'
import { memory } from '../context/LoginProvider'
import { useNavigate } from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from 'react'




const Login = () => {

  const {user,setUser} = useContext(memory)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  // 2const handleChange=(e)=>{
  //   setUser({...user,email:e.target.value})
  // }
  //1onchange={handleChange}


  //2.yontem  onChange={(e)=>setUser({...user,email:e.target.value})}


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();   
     setUser({...user,email:email,password:password})
     navigate(-1)
  };
  
 
  console.log(user);

  return (
    <div>
    <Container className="login">
    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>USERNAME</Form.Label>
        <Form.Control
          type="text"
          placeholder="email"
          name="email"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 password" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Container className="text-center" style={{ height: '30rem'}}>
        <Button  variant="danger" type="submit" className="login-btn m-5" >
          Submit
        </Button>
      </Container>
    </Form>
  </Container>

    </div>
  )
}

export default Login