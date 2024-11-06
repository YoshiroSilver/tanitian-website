import React, { useState, Fragment } from "react"
import ProfileIcon from "../../assets/Profile.svg?react"
import { IoIosMenu, IoIosPerson } from "react-icons/io"

import Menu from "./Menu"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen((prev) => !prev)
        console.log(menuOpen)
    }
    return (
        /*header container */
        <div className="m-4 flex justify-between">
            {/*menu icon */}
            <IoIosMenu
                className="text-4xl font-extrabold"
                onClick={handleMenuClick}
            />
            {menuOpen ? (
                <div className="absolute left-0 top-0 z-10 flex min-h-96 min-w-96 justify-center border-2 border-black bg-black text-white opacity-100 shadow-md">
                    <Menu />
                </div>
            ) : (
                <Fragment />
            )}
            {/*logo*/}
            <div className="font-sans text-2xl font-extrabold">Taniti</div>
            {/*profile icon*/}
            <IoIosPerson className="text-4xl font-extrabold" />
        </div>
    )
}

export default Header
