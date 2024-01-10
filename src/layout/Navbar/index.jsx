import React from 'react'
import "./navbar.scss"
function Navbar() {
  return (
    <div>
        <div id="navbar">
            <div className="container">
                <div className="photo">
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
                </div>
                <div className="pages">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Add</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar