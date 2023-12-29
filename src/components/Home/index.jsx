import React from 'react'
import Category from './Category'
import Premium from './Premium'
import Recent from './Recent'
import Vip from './Vip'
import About from './About'
import PopularRequest from './PopularRequest'

export default function Home({ data }) {
  return (
    <div className='home'>
      <Category/>
      <Premium data={data} title="Premium" />
      <Premium data={data} title="Vip"/>
      <Premium data={data} title="Ən son"/>
      <About/>
      <PopularRequest />
    </div>
  )
}