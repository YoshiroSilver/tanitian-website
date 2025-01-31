import React,{useState} from "react"
import {LodgingData} from "../data/lodgingData"
import Cards from "../components/cards/Cards"

function Lodging() {
    const [lodgings, setLodgings] = useState([...LodgingData])
    const [sortKey, setSortKey] = useState(null)

    const SortItems = (key) => {
        console.log("button pressed: " + key)
        const sorted = [...lodgings].sort((a,b) => {
            if (key === "title") return a.title.localeCompare(b.title)
            if (key === "rating") return b.rating - a.rating
            if (key === "cost") return a.costRating.localeCompare(b.costRating)
            return 0
        })
        setSortKey(key)
        setLodgings(sorted)
    }

    return (
        <div className="m-4 flex flex-col h-screen">
            <div className="m-1 text-primary text-center text-4xl">Lodging</div>
            <div className="m-1 flex flex-row justify-center">
                <button onClick={()=>{SortItems("title")}} className="text-primary mx-2 bg-foreground">Sort by Title</button>
                <button onClick={()=>{SortItems("rating")}} className="text-primary mx-2 bg-foreground">Sort by Rating</button>
                <button onClick={()=>{SortItems("cost")}} className="text-primary mx-2 bg-foreground">Sort by Cost</button>
            </div>
            <div className="m-2 h-5/6 overflow-y-auto">
                <Cards data={lodgings} type="lodging" />
            </div>
        </div>
    )
}

export default Lodging
