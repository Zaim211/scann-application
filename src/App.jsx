import { BrowserRouter } from 'react-router-dom'
import {Works } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full h-full">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Works />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
