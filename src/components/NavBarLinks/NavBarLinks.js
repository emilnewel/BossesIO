import React from 'react'

const NavBarLinks = () => {
  return (
    <>
    <div className="navbar-brand">Bosses IO</div>
    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/bosses">Bosses</a>
        </li>
        </ul>
    </div>
    </>
  )
}

export default NavBarLinks
