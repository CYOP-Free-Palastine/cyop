import TemplateCard from '@components/template-card'
import React from 'react'
import cosmo from '@assets/portfolios/cosmo.png'
import tfpw from '@assets/portfolios/tfpw.jpg'
import smith from '@assets/portfolios/smith.jpg'

export default function Templates() {
  return (
    <section className='container'>
        <div className='flex flex-wrap justify-evenly gap-5'>
            <TemplateCard img={cosmo} price={"free"} />
            <TemplateCard img={tfpw} price={"premium"} />
            <TemplateCard img={smith} price={"free"} />
            <TemplateCard img={cosmo} price={"free"} />
            <TemplateCard img={smith} price={"premium"} />
            <TemplateCard img={tfpw} price={"10$"} />
            </div>
    </section>
  )
}