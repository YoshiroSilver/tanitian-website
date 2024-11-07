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
                        <li id={item.id} className="m-4">
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
            <div className="font-sans text-2xl font-extrabold">Taniti</div>
            {/*profile icon*/}
            <IoIosPerson className="text-4xl font-extrabold" />
        </div>
    )
}

export default Header
