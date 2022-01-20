import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/portfolio'>Portfolio</Link>
      </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
