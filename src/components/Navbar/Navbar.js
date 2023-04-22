import React from "react"
import './Navbar.css';

function Navbar() {
    return (
        <nav class="Navbar">
            <div className="Heading">
                <img className="logo" src="https://www.pngarts.com/files/7/Podcast-Symbol-Transparent-Image.png" alt="Img Cannot Load :("></img>
                <h2>CardinalCast</h2>
            </div>
            <div className="Link">
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='/playlist'><li>|   Playlists</li></a>
                    <a href='/profile'><li>|    Profile</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar