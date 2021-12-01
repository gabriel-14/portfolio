import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
const App = () => {
    return (
        <>
            <CssBaseline />
            <Router>
            <Navbar />
                <Routes>
                    <Route exact path="/portfolio/" element={<Home />}></Route>
                    <Route exact path="/portfolio-about" element={<About />}></Route>
                    <Route exact path="/portfolio/contact-us" element={<Contact />}></Route>
                </Routes>
            </Router>

        </>
    )
}

export default App
