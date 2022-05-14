import React from 'react';
import Navbar from './navbar';
import Form from './form';
import About from './about'
import Blogs from './blogs'

export default function registration() {
  return (
    <div>
      <Navbar />
      <Form />
      <About />
      <Blogs />
    </div>
  )
}