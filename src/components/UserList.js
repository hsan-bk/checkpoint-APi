import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function UserList({users , text}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='users'>
        {users ? 
        (users.filter((user)=>user.name.toLowerCase().includes(text.toLowerCase())).map((user)=>(

        <div className="user ">
        <div className="user-name">
        <h2> {user.name} </h2>
        <p> {user.address.city} </p>
        </div>
        <Button variant="success" onClick={handleShow}>see more</Button>{' '}

       {/* modal affiché en cliquant see more */}
    <Modal show={show} onHide={handleClose} animation={false} size='lg' className='modalfilm'>
        <Modal.Header closeButton>
          <Modal.Title>{user.name}'s details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalcontainer'>
          <div>
          <h3>{user.name}'s Address</h3>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>
          <h3>{user.name}'s Company</h3>
      <p>Name: {user.company.name}</p>
      <p>Catchphrase: {user.company.catchPhrase}</p>
      <p>BS: {user.company.bs}</p>
          <h3>{user.name}'s Contact Info</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    

        ))
        ):(<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading"/>)}
    </div>
  )
}

export default UserList