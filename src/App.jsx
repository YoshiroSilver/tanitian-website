import React, { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Transportation from "./pages/Transportation"
import Lodging from "./pages/Lodging"
import NoPage from "./pages/NoPage"
import Attractions from "./pages/Attractions"

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen((prev) => !prev)
        console.log(menuOpen)
    }

    return (
        <div className="bg-background">
            <Header handleMenuClick={handleMenuClick} isMenuOpen={menuOpen} />
            <div className="mx-3 lg:mx-16 xl:mx-72">
                <HashRouter hashType="hashbang" >
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home/>} />
                        <Route path="profile" element={<Profile/>} />
                        <Route path="transportation" element={<Transportation/>} />
                        <Route path="lodging" element={<Lodging/>} />
                        <Route path="attractions" element={<Attractions/>} />
                        <Route path="*" element={<NoPage/>} />
                    </Routes>
                </HashRouter>
            </div>
        </div>
    )
}

export default App
