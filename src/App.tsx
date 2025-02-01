
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [advice, setAdvice] = useState({
    id: 0,
    advice: ""
  })

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice({ id: data.slip.id, advice: data.slip.advice }))
  }

  useEffect(() => {
    fetchAdvice()
  }, []);
  return (

    <main className='w-screen h-screen flex justify-center items-center'>
      <Card getAdvice={fetchAdvice} advice={advice} />
    </main>

  )
}

export default App
