import TemplateCard from '@components/template-card'
import React from 'react'
import cosmo from '@assets/portfolios/cosmo.png'
import tfpw from '@assets/portfolios/tfpw.png'
import smith from '@assets/portfolios/smith.jpg'

export default function Templates() {
  return (
    <section className='container'>
        <div className='flex flex-wrap justify-evenly gap-5'>
            <TemplateCard title={"Brutalist"} img={cosmo} price={"10$"} link={"brutalist"} />
            <TemplateCard title={"Retro"} img={tfpw} price={"free"} link={"retro"} />
            <TemplateCard title={"Brutalist"} img={smith} price={"free"} />
            <TemplateCard title={"Brutalist"} img={cosmo} price={"free"} />
            <TemplateCard title={"Brutalist"} img={smith} price={"premium"} />
            <TemplateCard title={"Brutalist"} img={tfpw} price={"10$"} />
            </div>
    </section>
  )
}