import React, { Component } from "react"

import styles from "./Cards.module.css"
import Card from "./Card"

import Xaiomi_11_Ultra from "../images/xiaomi_11_ultra.jpg"
import mi10 from "../images/poco_m3.jpg"
import note10 from "../images/redmi_note_10.jpg"
import mi11 from "../images/mi_11.jpg"
import { uid } from "uid"

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            cardData: [
                { image: Xaiomi_11_Ultra, name: "Xaiomi 11 Ultra", cost: "500 $" },
                { image: mi10, name: "Poco M3", cost: "400 $" },
                { image: note10, name: "Redmi Note 10", cost: "310 $" },
                { image: mi11, name: "MI 11", cost: "600 $" }
            ]
        }
    }

    render() {
        return (
            <div className={styles.container} >
                <div className={styles.header}>
                    <span></span>
                    <h2>New Products</h2>
                    <span></span>
                </div>
                <div className={styles.cards}>
                    {this.state.cardData.map(card => <Card key={uid(card)} image={card.image} name={card.name} cost={card.cost} />)}
                </div>
            </div>
        )
    }
}

export default Cards