import React from "react"
import Navbar from ".components/Navbar";
import Podcast from ".components/Podcast";
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