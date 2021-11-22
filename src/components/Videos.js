import React, { Component } from "react"
import styles from "./Videos.module.css"
import VideoCard from "./VideoCard"
import tv from "../images/tv.jpg"
import laptop from "../images/laptop.jpg"
import note11 from "../images/note_11_v.jpg"
class Videos extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <span></span>
                    <h2>Videos</h2>
                    <span></span>
                </div>
                <div className={styles.cards}>
                    <VideoCard src={tv} text="Xiaomi Tv Play Hard Work Smart" />
                    <VideoCard src={laptop} text="Own Your Style | RedmiBook" />
                    <VideoCard src={note11} text="Meet Xiaomi 11 Ultra Features" />
                </div>
            </div>
        )
    }
}

export default Videos