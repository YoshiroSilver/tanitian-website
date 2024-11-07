import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NoPage from "./pages/NoPage"

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen((prev) => !prev)
        console.log(menuOpen)
    }

    return (
        <>
            <Header handleMenuClick={handleMenuClick} isMenuOpen={menuOpen} />
            <div className="mx-3 lg:mx-16 xl:mx-72">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
