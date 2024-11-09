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
                    className="aspect-square w-52 rounded-full border-2 border-secondary"
                />
            </div>
            <div className="flex justify-center">
                <div className="mb-auto mt-4 content-center rounded-lg border-border bg-foreground text-center text-primary">
                    <Accordion data={ProfileData} />
                </div>
            </div>
        </>
    )
}

export default Profile
