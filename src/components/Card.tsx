import { useEffect, useState } from "react";

const Card = ({ getAdvice, advice }: { getAdvice: () => void, advice: { id: number, advice: string } }) => {
  const getImageSrc = (width: number) => {
    if (width <= 375) return "/images/pattern-divider-mobile.svg";
    if (width < 1024) return "/images/pattern-divider-desktop.svg";
    return "/images/pattern-divider-mobile.svg";
  };
  
  const [imageSrc, setImageSrc] = useState(getImageSrc(window.innerWidth));
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 375px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setImageSrc(e.matches ? "/images/pattern-divider-mobile.svg" : "/images/pattern-divider-desktop.svg");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <div className='w-fit h-fit bg-(--dark-grayish-blue) flex flex-col justify-center items-center mx-4 p-8 rounded-lg relative lg:w-1/3 '>
      <p className='adviceNum text-xs text-(--neon-green) tracking-wider mt-2'>ADVICE #{advice.id}</p>
      <p className='text-center text-pretty mt-4 mb-8 font-bold'>"{advice.advice}"</p>
      <img className='w-full h-fit mb-8' src={imageSrc} alt="separador" />
      <button className='w-fit h-fit bg-(--neon-green) p-4 rounded-full absolute -bottom-5 cursor-pointer' onClick={() => getAdvice()}><img src="/images/icon-dice.svg" alt="icon" /></button>
    </div>
  )
}

export default Card