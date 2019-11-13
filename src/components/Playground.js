import React, {Component} from "react";


export default class Playground extends Component {
    constructor (...args) {
        super(... args);

        this.state = {
            text: "", 
            checked : false
        };
    }

    render() {
        const {text, checked } = this.state;

        return (
            <section>
                <h3>Playground component</h3>
                <p>The input box and checked box will be mirrored in the list to display state.</p>
                <input 
                type="text"
                value={text}
                onChange={e => this.setState({text:e.target.value})}>
                </input>
                <input 
                type="checkbox"
                value={checked}
                onChange={e => this.setState({checked:e.target.checked})}>
                </input>
                <ul>
                    <li>{text}</li>
                    <li>{checked.toString()}</li>
                </ul>
            </section>
        )


    }

}