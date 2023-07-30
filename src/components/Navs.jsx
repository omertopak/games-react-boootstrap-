import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { memory } from '../context/LoginProvider'

const Navs = () => {
    const {user,setUser} = useContext(memory)

    return (
        <div className=''>
            <nav className="navbar sticky-top navbar-expand navbar-light bg-light justify-content-between">
                <div >
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Disabled</Link>
                        </li>
                    </ul>
                </div>
                <div >
                    <nav className="navbar navbar-light bg-light p-2">
                        <Link className="nav-link m-2" to="/login">{user ? "login" : "logout"}</Link>
                        <div  className="navbar-brand " to="#">
                            <img src="https://www.pngmart.com/files/21/Action-Game-PNG-Transparent.png" width={40} height={40} alt="" />
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navs