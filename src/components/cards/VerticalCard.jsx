import React from "react"

function VerticalCard({ data }) {
    return (
        <div className="m-2 flex flex-col content-center sm:m-3">
            <div className="aspect-square w-48 overflow-hidden lg:max-w-60">
                <p className="bg-black text-white">{data.imgAttrib}</p>
                <img src={data.img} alt={data.imgTitle} />
            </div>
            <div>
                <h1 className="font-bold">{data.title}</h1>
                <p className="w-48 overflow-hidden lg:max-w-60">{data.desc}</p>
            </div>
        </div>
    )
}

export default VerticalCard
