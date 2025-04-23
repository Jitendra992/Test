
import './App.css'
import Crazzyhub from './shared/Crazzyhub'
import Section1 from './Componant/Section1'
import Section2 from './Componant/Section2'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Layout from './layout'
import SplashScreen from './SplashScreen' // Import karo
import { useEffect, useState } from 'react'




function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SplashScreen />
  }
 

  return (
    <>

    <BrowserRouter>

      <Routes>
      {routes?.map((i)=>(

        <Route path={i?.path}  element=<Layout>{i?.element}</Layout>/>


      ))}


      </Routes>
    </BrowserRouter>
    
   
   
  
    </>
  )
}

export default App
