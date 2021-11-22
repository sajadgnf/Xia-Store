import React, { Component } from "react"
import styles from "./VideoCard.module.css"
import playIcon from "../images/play-icon.png"
class VideoCard extends Component {
    render() {
        const { src, text } = this.props
        return (
            <div className={styles.container}>
                <img className={styles.video} src={src} alt="video" />
                <span className={styles.play_icon}>
                    <img src={playIcon} alt="play icon" />
                </span>
                <p>{text}</p>
            </div>
        )
    }
}

export default VideoCard