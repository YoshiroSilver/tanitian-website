import React from "react"
import { IoIosMenu, IoIosPerson } from "react-icons/io"

function Header({ handleMenuClick, isMenuOpen }) {
    const menuItems = [
        {
            id: 1,
            name: "Home",
            href: "/tanitian-website/#/home",
        },
        {
            id: 2,
            name: "Profile",
            href: "/tanitian-website/#/profile",
        },
        },
        {
            id: 3,
            name: "Attractions",
            href: "/tanitian-website/#/attractions",
        },
        {
            id: 4,
            name: "Transportation",
            href: "/tanitian-website/#/transportation",
        },
        {
            id: 5,
            name: "Lodging",
            href: "/tanitian-website/#/lodging",
        },
    ]

    return (
        /*header container */
        <div className="sticky top-0 z-10 mx-4 mb-2 flex translate-y-2 justify-between rounded-lg bg-foreground lg:mx-16 xl:mx-72">
            {/*menu icon */}
            <div className="relative content-center">
                <button
                    className="text-3xl font-extrabold text-primary"
                    onClick={handleMenuClick}
               >Menu</button> 
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
                <div className="font-sans text-4xl font-extrabold text-primary">
                    <a href="/tanitian-website/#/home">Taniti</a>
                </div>
            {/*profile icon*/}
            <a href="/tanitian-website/#/profile">
                <IoIosPerson className="text-5xl font-extrabold text-primary mr-2" />
            </a>
        </div>
    )
}

export default Header
