import React from "react"
import Header from "./components/header/Header"
import ImageCarousel from "./components/imagecarousel/imagecarousel"
import Cards from "./components/cards/Cards"

import { MainCarousel } from "./data/maincarousel"
import { PointsOfInterest } from "./data/pointsOfInterest"

const App = () => {
    return (
        <>
            <Header />
            <ImageCarousel imgArray={MainCarousel} />
            <h1 className="m-4 text-center text-3xl font-bold">
                Welcome to Taniti
            </h1>
            <p className="m-4 text-center font-semibold">
                While the island has an area of less than 500 square miles, the
                terrain is varied and includes both sandy and rocky beaches, a
                small but safe harbor, lush tropical rainforests, and a
                mountainous interior that includes a small, active volcano.
                Whether you just want to relax or escape on an adventure, Taniti
                has it all.
            </p>
            <h1 className="m-4 text-center text-3xl font-bold">
                Points of Interest
            </h1>
            <Cards data={PointsOfInterest} vertical={true} />
        </>
    )
}

export default App
