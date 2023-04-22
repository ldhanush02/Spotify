import React from "react"
import Navbar from "../Navbar";
import Podcast from "../Podcast/Podcast";
function Home() {
    return (
        <div className="Homepage">
            <Navbar />
            <div className="Box">
                <Podcast />
            </div>
        </div>
    )
}
export default Home;