import React from 'react'
import { Link } from 'react-router-dom'

function Header({desc}) {
    return (
        <div className="header close">
        <div className="container">
          <h1 id="title">{desc}</h1>
          <nav className=" head3 navbar-expand-lg ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link anc2"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/pages">
                  pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2 active" to="#">
                  {desc}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}

export default Header
