import React, {useState} from "react";


export default function Playground() {

    // const state = useState("");
    // const text = state[0];  //current value of state
    // const setText = state[1]; //function to update state

    const [text, setText] = useState(""); // same as above but using destructor, cleaner.
    const [checked, setChecked] = useState(false);

    return (
        <section>
            <h3>Playground component</h3>
            <p>Mirrors the input values</p>
            <input 
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}>
            </input>
            <input 
            type="checkbox"
            value={checked}
            onChange={e => setChecked(e.target.checked)}>
            </input>
            <ul>
                <li>{text}</li>
                <li>{checked.toString()}</li>
            </ul>
        </section>
    )

}