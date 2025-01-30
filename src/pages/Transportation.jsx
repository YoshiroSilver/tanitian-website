import React from "react"
import { TransportData } from "../data/transportData"
import Cards from "../components/cards/Cards"

function Transportation() {
    return (
        <div className="m-4 mt-10 flex flex-wrap content-center justify-center">
            <Cards data={TransportData} type="horizontal" />
        </div>
    )
}

export default Transportation
