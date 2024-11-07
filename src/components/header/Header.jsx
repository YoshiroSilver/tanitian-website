import React from "react"
import { IoIosMenu, IoIosPerson } from "react-icons/io"
import { Link } from "react-router-dom"



function Header({ handleMenuClick, isMenuOpen }) {

    const menuItems = [
        {
            id: 1,
            name: "Home",
            href: "/home",
        },
        {
            id: 1,
            name: "Profile",
            href: "/profile",
        },
        {
            id: 1,
            name: "Attractions",
            href: "/attractions",
        },
        {
            id: 1,
            name: "Transportation",
            href: "/transportation",
        },
        {
            id: 1,
            name: "Lodging",
            href: "/lodging",
        },

    ]

    return (
        /*header container */
        <div className="m-4 flex justify-between">
            {/*menu icon */}
            <IoIosMenu className={isMenuOpen ? "text-4xl font-extrabold z-20 text-white" : "text-4xl font-extrabold"} onClick={handleMenuClick} />
            <div className={isMenuOpen ? "w-72 bg-black absolute top-0 left-0 z-10 rounded-r-lg rounded-b-lg flex flex-col items-center" : "hidden"}>
                <ul className="text-center mt-8">
                    {menuItems.map((item) => (
                        <li id={item.id} className="m-4">
                            <a href={item.href} className="text-white font-bold">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/*logo*/}
            <div className="font-sans text-2xl font-extrabold">Taniti</div>
            {/*profile icon*/}
            <IoIosPerson className="text-4xl font-extrabold" />

        </div>
    )
}

export default Header
