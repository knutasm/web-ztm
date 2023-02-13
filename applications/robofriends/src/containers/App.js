import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import Scroll from "../components/Scroll";
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        // Destructure for readability
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        // Use ternary operator
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>

            );
    }
}

export default App