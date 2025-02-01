import React from 'react'



const Card = ({getAdvice, advice}:{getAdvice:()=>void, advice:{id:number, advice:string}}) => {
  return (
    <div className='w-fit h-fit bg-(--dark-grayish-blue) flex flex-col justify-center items-center mx-4 p-8 rounded-lg relative lg:w-1/3 '>
      <p className='adviceNum text-xs text-(--neon-green) tracking-wider mt-2'>ADVICE #{advice.id}</p>
      <p className='text-center text-pretty mt-4 mb-8 font-bold'>"{advice.advice}"</p>
      <img className='w-full h-fit mb-8' src="/images/pattern-divider-desktop.svg" alt="" />
      <button className='w-fit h-fit bg-(--neon-green) p-4 rounded-full absolute -bottom-5 cursor-pointer' onClick={()=> getAdvice()}><img src="/images/icon-dice.svg" alt="icon" /></button>
    </div>
  )
}

export default Card