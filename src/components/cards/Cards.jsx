import React, { Fragment } from "react"
import VerticalCard from "./VerticalCard"
import HorizontalCard from "./HorizontalCard"
import ExpandingCard from "./ExpandingCard"

function Cards({ data, type }) {

    const renderCards = () => {
        if (data && data.length > 0) {
            switch (type) {
                case 'vertical':
                    return (
                        <div className="flex overflow-x-auto rounded-lg bg-foreground lg:justify-center">
                        {data.map((_, index) => (
                            <div key={index}>
                            <VerticalCard data={data[index]} />
                            </div>
                        ))}
                        </div>
                    )
                case 'horizontal':
                    return (
                        <div className="flex flex-wrap">
                        {data.map((_,index) => (
                            <div key={index}>
                            <HorizontalCard data={data[index]} />
                            </div>
                        ))}
                        </div>
                    )
                case 'expanding':
                    return (
                        <div className="flex flex-wrap rounded-lg bg-foreground">
                        {data.map((_,index) => (
                            <div key={index}>
                            <ExpandingCard data={data[index]} />
                            </div>
                        ))}
                        </div>
                    )
                default:
                    return <Fragment />
            }
        }
        else {
            return <Fragment />
        }


    }


    return (
        <div>
            {renderCards()}
        </div>
    )
}

export default Cards
