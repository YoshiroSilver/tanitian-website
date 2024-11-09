import React from "react"

function HorizontalCard({ data }) {
    return (
        <div className="my-4 flex flex-col rounded-lg border border-border bg-foreground md:flex-row">
            <div className="m-2 md:w-2/5">
                <img
                    src={data.img}
                    alt={data.imgTitle}
                    className="rounded-lg"
                />
                <p className="text-xs text-copy">{data.imgAttrib}</p>
            </div>
            <div className="m-2">
                <h1 className="text-center text-lg font-bold text-copy">
                    {data.title}
                </h1>
                <p className="text-left text-copy">{data.desc}</p>
            </div>
        </div>
    )
}

export default HorizontalCard
