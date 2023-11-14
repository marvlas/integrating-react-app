import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ProjectListpage from './pages/ProjectListPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectListpage />} />
        </Routes>




      </div>
    </>
  )
}

export default App
