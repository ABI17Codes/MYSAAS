import Bgslider from '@/components/Bgslider'
import Header from '@/components/Header'
import Steps from '@/components/Steps'
import Testmonials from '@/components/Testmonials'
import Upload from '@/components/Upload'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Bgslider/>
      <Testmonials/>
      <Upload/>
    </div>
  )
}

export default Home