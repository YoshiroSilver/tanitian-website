import React, { useState } from "react"
import AccordionItem from "./AccordionItem"

function Accordion({ data }) {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleItemClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index))
    }
    return (
        <div className="max-w-2xl">
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={activeIndex === index}
                    onclick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
}

export default Accordion
