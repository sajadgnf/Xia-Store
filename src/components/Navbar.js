import React, { Component } from "react"
import styles from "./Navbar.module.css"
import logo from "../images/Xiaomi_logo.svg"
import {Link} from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <header className={styles.navbar}>
                <div>
                    <ul className={styles.list}>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </div>

                <div>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
            </header>
        )
    }
}

export default Navbar