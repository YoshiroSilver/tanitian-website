import React, { Fragment } from "react"
import VerticalCard from "./VerticalCard"
import HorizontalCard from "./HorizontalCard"

function Cards({ data, vertical = false }) {
    return data && data.length > 0 ? (
        vertical ? (
            <div className="flex overflow-x-auto md:justify-center">
                {data.map((_, index) => (
                    <VerticalCard data={data[index]} />
                ))}
            </div>
        ) : (
            <div className="flex-col">
                {data.map((_, index) => (
                    <HorizontalCard data={data[index]} />
                ))}
            </div>
        )
    ) : (
        <Fragment />
    )
}

export default Cards
