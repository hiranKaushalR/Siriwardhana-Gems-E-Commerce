import React from 'react'
import HomeHero from './HomeHero'
import HomeProducts from './HomeProducts'
import HomeNote from './HomeNote'

function HomeCanvas() {
  return (
    <div className="font-primary py-10 px-5 lg:px-0">
      <HomeHero />
      <HomeProducts />
      <HomeNote/>
    </div>
  )
}

export default HomeCanvas
