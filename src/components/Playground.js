import React, {useState} from "react";


export default function Playground() {

    // const state = useState("");
    // const text = state[0];  //current value of state
    // const setText = state[1]; //function to update state

    const [text, setText] = useState(""); // same as above but using destructor, cleaner.
    const [checked, setChecked] = useState(false);


    // multiple ways to handles this event since its a toggle.
    const handleCheckboxToggle = e => {
        setChecked(e.target.checked);
    }

    //swapping state
    const handleCheckboxToggle2 = () => {
        setChecked(!checked);
    }

    //passing a function and using previous state
    const handleCheckboxToggle3 = e => {
        setChecked(prevChecked => !prevChecked);
    }

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
            onChange={handleCheckboxToggle}>
            </input>
            <ul>
                <li>{text}</li>
                <li>{checked.toString()}</li>
            </ul>
        </section>
    )

}