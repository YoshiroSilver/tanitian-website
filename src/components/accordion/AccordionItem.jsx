import React, { useRef, Fragment } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"

function AccordionItem({ item, isOpen, onclick }) {
    const contentHeight = useRef()

    return (
        <div className="overflow-hidden border-b">
            <button
                className={`flex w-full cursor-pointer content-center justify-between border-none bg-transparent px-3 py-5 text-left text-xl font-medium ${isOpen ? "" : ""}`}
                onClick={onclick}
            >
                <p className="">{item.title}</p>
                <RiArrowDropDownLine className={isOpen ? "" : ""} />
            </button>

            <div
                ref={contentHeight}
                className=""
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                {item.content ? (
                    Object.entries(item.content).map(([key, value]) => {
                        return (
                            <div key={key} className="flex flex-row justify-center items-center">
                                <h2 className="text-lg font-bold ml-2">{key}</h2>
                                <p className="text-left m-2 bg-white text-black">{value.toString()}</p>
                            </div>
                        )
                    })
                ) : (
                    <Fragment />
                )}
            </div>
        </div>
    )
}

export default AccordionItem
