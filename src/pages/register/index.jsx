import Left from '@components/register-sections/left'
import Right from '@components/register-sections/right'
import React from 'react'

export default function Register() {
  return (
    <section className='container py-5 font-montserrat'>
      <div className='flex gap-0 lg:gap-24 justify-center lg:justify-between'>
        <Right />
        <Left />
      </div>
    </section>
  )
}