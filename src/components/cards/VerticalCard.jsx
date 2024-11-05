import React from "react"

function VerticalCard({ data }) {
    return (
        <div className="m-2 max-h-96 w-1/3 flex-col border">
            <div className="h-2/5">
                <img src={data.img} />
                <p>{data.imgAttrib}</p>
            </div>
            <div>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default VerticalCard
