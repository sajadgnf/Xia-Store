import React, { Component } from "react";
import Banner from "./Banner"
import Cards from "./Cards"
import Videos from "./Videos"

class HomePage extends Component {
    render() {
        return (
            <>
                <Banner />
                <Cards />
                <Videos />
            </>
        )
    }
}

export default HomePage