import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from './pages/layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <MainLayout /> }>
            <Route index element ={ <Home /> } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
