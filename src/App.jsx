import { BrowserRouter as Router, Routes , Route} from 'react-router'
import LogIn from './app/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </Router>
  )
}

export default App
