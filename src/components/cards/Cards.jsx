import React, { Fragment } from "react"
import VerticalCard from "./VerticalCard"
import HorizontalCard from "./HorizontalCard"

function Cards({ data, vertical = false }) {
    return data && data.length > 0 ? (
        vertical ? (
            <div className="flex overflow-x-auto rounded-lg bg-foreground lg:justify-center">
                {data.map((_, index) => (
                    <div key={index}>
                        <VerticalCard data={data[index]} />
                    </div>
                ))}
            </div>
        ) : (
            <div className="flex flex-wrap">
                {data.map((_, index) => (
                    <div key={index}>
                        <HorizontalCard data={data[index]} />
                    </div>
                ))}
            </div>
        )
    ) : (
        <Fragment />
    )
}

export default Cards
