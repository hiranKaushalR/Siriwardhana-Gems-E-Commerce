import React from 'react'
import GemstoneFilter from './GemstoneFilter'
import GemstoneItems from './GemstoneItems'

function GemstoneCanvas() {
  return (
    <div className='font-primary py-10 px-5 lg:px-0'>
      <GemstoneFilter />
      <GemstoneItems />
    </div>
  )
}

export default GemstoneCanvas
