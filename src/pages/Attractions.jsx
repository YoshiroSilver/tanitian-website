import React from "react"
import { PointsOfInterest } from "../data/pointsOfInterest"
import Cards from "../components/cards/Cards"

function Attractions() {
    return (
        <div className="m-4">
            <div className="text-primary text-center text-4xl">Attractions</div>
            <Cards data={PointsOfInterest} type="expanding" />
        </div>
    )
}

export default Attractions
