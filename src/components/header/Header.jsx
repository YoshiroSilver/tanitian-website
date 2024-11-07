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
            id: 2,
            name: "Profile",
            href: "/profile",
        },
        {
            id: 3,
            name: "Attractions",
            href: "/attractions",
        },
        {
            id: 4,
            name: "Transportation",
            href: "/transportation",
        },
        {
            id: 5,
            name: "Lodging",
            href: "/lodging",
        },
    ]

    return (
        /*header container */
        <div className="m-4 flex justify-between">
            {/*menu icon */}
            <IoIosMenu
                className={
                    isMenuOpen
                        ? "z-20 text-4xl font-extrabold text-white"
                        : "text-4xl font-extrabold"
                }
                onClick={handleMenuClick}
            />
            <div
                className={
                    isMenuOpen
                        ? "absolute left-0 top-0 z-10 flex w-72 flex-col items-center rounded-b-lg rounded-r-lg bg-black"
                        : "hidden"
                }
            >
                <ul className="mt-8 text-center">
                    {menuItems.map((item) => (
                        <li key={item.id} className="m-4">
                            <a
                                href={item.href}
                                className="font-bold text-white"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/*logo*/}
            <a href="/home">
                <div className="font-sans text-2xl font-extrabold">Taniti</div>
            </a>
            {/*profile icon*/}
            <a href="/profile">
                <IoIosPerson className="text-4xl font-extrabold" />
            </a>
        </div>
    )
}

export default Header
