import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Following from './pages/Following/index.js'
import React from "react"


function Home1() {
    return (<h2>Hoewqeme page</h2>);
}

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/' element={<Home1 />}
                />

            </Routes>
        </Router>
    );
}
export default App