import React, { Component } from "react"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import HomePage from "./components/HomePage"
import Products from "./components/Produts"
import { Route, Switch } from "react-router"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/products" component={Products} ></Route>
                    <Route exact path="/" component={HomePage} ></Route>
                </Switch>
                <SearchBar />
            </div>
        )
    }
}

export default App