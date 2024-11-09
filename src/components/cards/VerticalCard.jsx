import React from "react"

function VerticalCard({ data }) {
    return (
        <div className="m-2 flex flex-col content-center sm:m-3">
            <div className="aspect-square w-48 content-center overflow-hidden rounded-lg lg:max-w-60">
                <p className="rounded-t-lg bg-primary text-center text-primary-content">
                    {data.imgAttrib}
                </p>
                <img
                    src={data.img}
                    alt={data.imgTitle}
                    className="rounded-b-lg"
                />
            </div>
            <div>
                <h1 className="text-center font-bold text-copy">
                    {data.title}
                </h1>
                <p className="w-48 overflow-hidden text-copy lg:max-w-60">
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default VerticalCard
