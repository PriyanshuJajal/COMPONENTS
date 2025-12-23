import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
      <>  
        <Navbar />
        <div className='max-w-7xl mx-auto pt-20 px-6'>
          <Footer />
        </div>
      </>
    )
}

export default App
