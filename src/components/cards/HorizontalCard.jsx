import React from "react"

function HorizontalCard({ data }) {
    return (
        <div className="flex w-screen border">
            <div className="m-2 w-2/5">
                <img src={data.img} alt={data.imgTitle} />
                <p className="text-xs">{data.imgAttrib}</p>
            </div>
            <div className="m-2">
                <h1 className="text-center text-lg font-bold">{data.title}</h1>
                <p className="text-left">{data.desc}</p>
            </div>
        </div>
    )
}

export default HorizontalCard
