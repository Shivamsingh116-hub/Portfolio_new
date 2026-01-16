import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import About from './components/About'
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}
export default App