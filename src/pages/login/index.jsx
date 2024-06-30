import Left from '@components/login-sections/left'
import Right from '@components/login-sections/right'
import React from 'react'

export default function Login() {
  return (
    <section className='container py-5 font-montserrat'>
      <div className='flex gap-0 lg:gap-24 justify-center lg:justify-between'>
        <Right />
        <Left />
      </div>
    </section>
  )
}