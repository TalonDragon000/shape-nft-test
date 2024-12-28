import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleFile from './components/SingleFile'
import ImageUploader from './components/ImageUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageUploader />
      {/* <SingleFile /> */}
    </>
  )
}

export default App
