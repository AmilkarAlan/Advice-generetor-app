import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='w-fit h-fit bg-(--dark-grayish-blue) flex flex-col justify-center items-center mx-4 p-8 rounded-lg relative lg:w-1/3 '>
      <p className='adviceNum text-xs text-(--neon-green) tracking-wider mt-2'>ADVICE #177</p>
      <p className='text-center text-pretty mt-4 mb-8'>"Everyone has their down days. Don't take it out on innocent bystanders."</p>
      <img className='w-full h-fit mb-8' src="/images/pattern-divider-desktop.svg" alt="" />
      <button className='w-fit h-fit bg-(--neon-green) p-4 rounded-full absolute -bottom-5 cursor-pointer'><img src="/images/icon-dice.svg" alt="icon" /></button>
    </div>
  )
}

export default Card