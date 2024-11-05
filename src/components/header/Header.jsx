import React from "react"
import ProfileIcon from "../../assets/Profile.svg?react"
import { IoIosMenu, IoIosPerson } from "react-icons/io"

function Header() {
    return (
        /*header container */
        <div className="m-4 flex justify-between">
            {/*menu icon */}
            <IoIosMenu className="text-4xl font-extrabold" />
            {/*logo*/}
            <div className="font-sans text-2xl font-extrabold">Taniti</div>
            {/*profile icon*/}
            <IoIosPerson className="text-4xl font-extrabold" />
        </div>
    )
}

export default Header
