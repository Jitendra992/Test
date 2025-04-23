import React from 'react'
import Footer from '../Componant/Footer'
import Crazzyhub from '../shared/Crazzyhub'

const Layout = ({children}) => {
  return (
   <>

<Crazzyhub/>

    {children}

    <Footer/>
   </>
  )
}

export default Layout