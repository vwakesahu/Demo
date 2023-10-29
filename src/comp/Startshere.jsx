import React from 'react'
import Gridimg from '../img/gridimg.svg'
const Startshere = () => {
  return (
    <div className=' md:mt-32 grid md:grid-cols-2 grid-cols-1 items-center mt-10'>
        <p className=' md:text-9xl text-5xl flex-wrap font-semibold'>Your Buying/ Selling starts here</p>
        <img src={Gridimg} alt="img" />
    </div>
  )
}

export default Startshere