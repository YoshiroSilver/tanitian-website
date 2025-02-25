import React, { useEffect, useState } from "react"

import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5"

function ImageCarousel({ imgArray }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide) =>
                currentSlide === imgArray.length - 1 ? 0 : currentSlide + 1,
            )
        }, 3000)
        return () => clearInterval(interval)
    })

    const handleBack = () => {
        setCurrentSlide((currentSlide) =>
            currentSlide === 0 ? imgArray.length - 1 : currentSlide - 1,
        )
    }

    const handleForward = () => {
        setCurrentSlide((currentSlide) =>
            currentSlide === imgArray.length - 1 ? 0 : currentSlide + 1,
        )
    }

    return (
        <div className="my-4 flex flex-col content-center justify-center overflow-hidden rounded-lg bg-foreground">
            <div className="relative m-auto max-w-3xl">
                <IoArrowForwardCircleOutline
                    className="absolute right-4 top-1/2 rounded-full bg-secondary text-3xl text-secondary-content hover:bg-black hover:text-white"
                    onClick={handleForward}
                />
                <IoArrowBackCircleOutline
                    className="absolute left-4 top-1/2 rounded-full bg-secondary text-3xl text-secondary-content hover:bg-black hover:text-white"
                    onClick={handleBack}
                />
                <img
                    src={imgArray[currentSlide].img}
                    alt={
                        imgArray[currentSlide].attribute
                            ? imgArray[currentSlide].attribute
                            : "UnKnown"
                    }
                />
            </div>
            <div className="text-center text-base font-bold text-secondary">
                {imgArray[currentSlide].name
                    ? imgArray[currentSlide].name
                    : "UnKnown"}
            </div>
            <div className="text-center text-xs text-secondary">
                {imgArray[currentSlide].attribute
                    ? imgArray[currentSlide].attribute
                    : "UnKnown"}
            </div>
        </div>
    )
}

export default ImageCarousel
