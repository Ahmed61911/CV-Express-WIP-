import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Dashboard} from './pages/dashboard'

function App() {
  return (
      <Router>
        <div className='app-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/*' element={<h1>404 Page not found!</h1>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
