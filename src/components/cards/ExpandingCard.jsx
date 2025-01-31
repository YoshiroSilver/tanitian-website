import React, {useState} from 'react'

function ExpandingCard({ data }) {
    const [expanded,setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="m-2 flex flex-col items-center sm:m-3" onClick={toggleExpanded}>
            <div className={`aspect-square overflow-hidden rounded-lg lg:max-w-60 ${expanded ? "w-full" : "w-40"}`}>
                <p className="rounded-t-lg bg-primary text-center text-primary-content">
                    {data.imgAttrib}
                </p>
                <img
                    src={data.img}
                    alt={data.imgTitle}
                    className="rounded-b-lg"
                />
            </div>
            {expanded && (
                <div>
                    <h1 className="text-center font-bold text-copy">
                        {data.title}
                    </h1>
                    <p className="w-48 overflow-hidden text-copy lg:max-w-60">
                        {data.desc}
                    </p>
                </div>
            )}
        </div>
    )
}

export default ExpandingCard
