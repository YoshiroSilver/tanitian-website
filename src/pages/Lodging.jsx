import React,{useState} from "react"
import {LodgingData} from "../data/lodgingData"
import Cards from "../components/cards/Cards"

function Lodging() {
    const [lodgings, setLodgings] = useState([...LodgingData])
    const [sortKey, setSortKey] = useState("title")

    const SortItems = (key) => {
        const sorted = [...lodgings].sort((a,b) => {
            if (key === "title" && sortKey != key) return a.title.localeCompare(b.title)
            if (key === "title" && sortKey === key) return b.title.localeCompare(a.title)
            if (key === "rating" && sortKey != key) return b.rating - a.rating
            if (key === "rating" && sortKey === key) return a.rating - b.rating
            if (key === "cost" && sortKey != key) return a.costRating.localeCompare(b.costRating)
            if (key === "cost" && sortKey === key) return b.costRating.localeCompare(a.costRating)
            return 0
        })
        if (key === sortKey) {
            setSortKey(key + "desc")
        }
        else {
            setSortKey(key)
        }
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
