import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthenticate}) => {
  const navigate=useNavigate()

  const loginUser=(event)=>{
    event.preventDefault()
    setAuthenticate(true)
    navigate('/')
  }

  return (
    <Container style={{margin:'30px auto'}}>
      {/*Form을 사용할 때에는 .preventDefault함수를 사용해 홈페이지가 리프레쉬되는 것을 막아줄 수 있다 */}
    <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
          We'll never share your privacy with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Login
      </Button>
    </Form>
    </Container>
  )
}

export default Login