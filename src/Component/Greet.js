import React from 'react'

export default function Greet(props) {
  return <div className='container card p-3 mt-2 register-container text-center'>
    console.log(Greet);
    <h3>{props.name}</h3>
    <h3>thank you for joining us</h3>
    <h3>verification sent to {props.email}</h3>

  </div>
}
