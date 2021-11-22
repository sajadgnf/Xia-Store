import React, { Component } from "react"
import axios from "axios"
import Card from "./Card"
import styles from "./Products.module.css"

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: []
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => this.setState({ cardData: response.data }))
    }


    render() {
        const { cardData } = this.state
        return (
            <div className={styles.container}>
                {
                    cardData.length ?
                        cardData.map(product => <Card key={product.id} name={product.title} cost={`${product.price}`} image={product.image} />) :
                        <h1>Loading...</h1>
                }
            </div>
        )
    }
}

export default Products