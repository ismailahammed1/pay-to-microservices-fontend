import React from 'react'
import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/TrustedBy/TrustedBy'
import "./Home"
const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
    </div>
  )
}

export default Home