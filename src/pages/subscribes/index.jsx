import SubscribeCard from '@components/subscribe-card'
import React from 'react'

export default function Subscribes() {
  return (
    <section className='container'>
        <h1 className='text-3xl font-bold mb-10'>Subscribes:</h1>
        <div className='flex flex-wrap lg:flex-nowrap justify-evenly lg:justify-between gap-3'>
            <SubscribeCard plan={1} />
            <SubscribeCard plan={2} />
            <SubscribeCard plan={3} />
        </div>
    </section>
  )
}