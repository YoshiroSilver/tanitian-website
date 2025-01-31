import React from "react"

function LodgingCard({ data }) {
    return (
        <div className="my-1 h-20 w-full grid grid-cols-3 rounded-lg border border-border bg-foreground ">
            <div className="m-2 aspect-square h-16 col-span-1 object-scale-down overflow-hidden">
                <img
                    src={data.img}
                    alt={data.imgTitle}
                    className="rounded-lg"
                />
            </div>
            <div className="col-span-2 text-copy">
                <h3>{data.title}</h3>
                <div className="grid grid-rows-2">
                    <h2>{"Rating: " + data.rating + "/5"}</h2>
                    <h2>{"Cost: " + data.costRating}</h2>
                </div>
            </div>
        </div>
    )
}

export default LodgingCard
