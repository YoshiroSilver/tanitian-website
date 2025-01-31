import React from "react"

import ImageCarousel from "./../components/imagecarousel/ImageCarousel"
import Cards from "./../components/cards/Cards"

import { MainCarousel } from "./../data/maincarousel"
import { PointsOfInterest } from "./../data/pointsOfInterest"

function Home() {
    return (
        <div className="">
            <ImageCarousel imgArray={MainCarousel} />
            <h1 className="m-3 text-center text-3xl font-bold text-primary">
                Welcome to Taniti
            </h1>
            <p className="m-3 text-center font-semibold text-copy">
                While the island has an area of less than 500 square miles, the
                terrain is varied and includes both sandy and rocky beaches, a
                small but safe harbor, lush tropical rainforests, and a
                mountainous interior that includes a small, active volcano.
                Whether you just want to relax or escape on an adventure, Taniti
                has it all.
            </p>
            <h1 className="m-3 text-center text-3xl font-bold text-primary">
                Points of Interest
            </h1>
            <Cards data={PointsOfInterest} type="vertical" />
        </div>
    )
}

export default Home
