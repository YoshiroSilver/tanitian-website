import React from "react"
import { TransportData } from "../data/transportData"

function TransportCard({ item }) {
    return (
        <div className="m-8 h-96 max-w-56 border-2 border-gray-900 bg-gray-500">
            <h1 className="text-lg font-bold text-white">{item.title}</h1>
            <p className="m-2 text-white">{item.information}</p>
        </div>
    )
}

function Transportation() {
    return (
        <div className="flex flex-wrap content-center justify-center">
            {TransportData.map((item, index) => (
                <div key={index}>
                    <TransportCard item={item} />
                </div>
            ))}
        </div>
    )
}

export default Transportation
