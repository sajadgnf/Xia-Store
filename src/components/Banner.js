import React from "react"
import styles from "./Banner.module.css"
import banner from "../images/banner_img.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} className={styles.banner} alt="banner" />
            <div className={styles.text_content}>
                <h1>Xia Store</h1>
                <p>Higher quality than expected </p>
            </div>
        </div>
    )
}

export default Banner