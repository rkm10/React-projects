import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {

      return (
            <>
                  <nav className="flex items-center justify-center ">
                        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/manga">Manga</Link></li>
                              <li><Link to="/topanime">TopAnime</Link></li>
                              <li><Link to="/topmanga">Top Manga</Link></li>
                              <li><Link to="/topcharacters">Top Characters</Link></li>
                              <li><Link to="/recommendations">Recommendations</Link></li>
                              <li><Link to="/topreviews">Top Reviews</Link></li>
                        </ul>
                  </nav>
            </>
      )
} 