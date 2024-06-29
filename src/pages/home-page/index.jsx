import Comments from '@components/comments'
import Hero from '@components/hero'
import Tutorial from '@components/tutorial'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero />
      <Tutorial />
      <Comments />
    </div>
  )
}