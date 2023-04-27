import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';



function Navigation({settext}) {
  return (
    
    <div>

{/* navbar links */}
       <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        {/* <Navbar.Brand href="/">
          
          </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         

{/* search by name */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by user name"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation