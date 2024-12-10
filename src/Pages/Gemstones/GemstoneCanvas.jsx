import React from 'react'
import GemstoneFilter from './GemstoneFilter'
import GemstoneItems from './GemstoneItems'

function GemstoneCanvas() {
  return (
    <div className='xl:p-4 font-primary w-full max-w-[1080px] mx-auto px-3 flex justify-between'>
      <GemstoneFilter />
      <GemstoneItems />
    </div>
  )
}

export default GemstoneCanvas
