import React, { Component } from "react"
import styles from "./Card.module.css"
import up from "../images/up-arrow.png"
import down from "../images/down-arrow.png"


class Card extends Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1
            }))
        }
    }

    render() {
        const { image, name, cost } = this.props
        const { counter } = this.state
        return (
            <div className={styles.card}>
                <img src={image} alt="smart phone" />
                <h3>{name}</h3>
                <p> {counter && `${counter * Number(cost.split(" ")[0])} $`}</p>
                <div className={styles.amount}>
                    <img className={!counter ? styles.deactive : ""} src={down} alt="arrow down" onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img src={up} alt="arrow up" onClick={this.upHandler} />
                </div>
            </div>
        )
    }
}

export default Card