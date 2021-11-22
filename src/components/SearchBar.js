import React, { Component } from "react"
import styles from "./SearchBar.module.css"

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }

    searchHandler = event => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className={styles.search_bar}>
                    <h1>Search For More Products</h1>
                    <div>
                        <input name="search" type="search" placeholder="Search..." value={this.state.text} onChange={this.searchHandler} />
                        <br />
                        <br />
                        <span>{this.state.text}</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <p> &copy; All Rights Reserved 2021</p>
                </div>
            </div>
        )
    }
}

export default SearchBar