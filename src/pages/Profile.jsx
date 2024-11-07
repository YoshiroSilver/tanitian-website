import React from "react"

import ProfilePic from "../assets/ProfilePic.png"
import { ProfileData } from "../data/profileData"
import Accordion from "../components/accordion/Accordion"

function Profile() {
    return (
        <>
            <div className="flex content-center justify-center">
                <img
                    src={ProfilePic}
                    alt="Profile Picture stand in."
                    className="aspect-square w-52 rounded-full border-2 border-black"
                />
            </div>
            <div className="mb-auto mt-4 flex flex-col content-center rounded-lg border-black bg-black text-center text-white">
                <Accordion data={ProfileData} />
            </div>
        </>
    )
}

export default Profile
