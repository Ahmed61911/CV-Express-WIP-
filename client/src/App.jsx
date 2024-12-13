import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Dashboard} from './pages/dashboard'
import  Pricing  from './pages/price'
import  Contact  from './pages/Contact'

function App() {
  return (
      <Router>
        <div className='app-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/price' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<h1>404 Page not found!</h1>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
