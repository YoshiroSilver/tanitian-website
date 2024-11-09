import React from "react"
import { IoIosMenu, IoIosPerson } from "react-icons/io"

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
        <div className="sticky top-0 z-10 mx-4 mb-2 flex translate-y-2 justify-between rounded-lg bg-foreground lg:mx-16 xl:mx-72">
            {/*menu icon */}
            <div className="relative">
                <IoIosMenu
                    className="text-4xl font-extrabold text-primary"
                    onClick={handleMenuClick}
                />
                <div
                    className={
                        isMenuOpen
                            ? "absolute z-10 flex w-72 flex-col items-center rounded-lg rounded-r-lg bg-primary"
                            : "hidden"
                    }
                >
                    <ul className="mt-8 text-center">
                        {menuItems.map((item) => (
                            <li key={item.id} className="m-4">
                                <a
                                    href={item.href}
                                    className="font-bold text-primary-content"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/*logo*/}
            <a href="/home">
                <div className="font-sans text-2xl font-extrabold text-primary">
                    Taniti
                </div>
            </a>
            {/*profile icon*/}
            <a href="/profile">
                <IoIosPerson className="text-4xl font-extrabold text-primary" />
            </a>
        </div>
    )
}

export default Header
