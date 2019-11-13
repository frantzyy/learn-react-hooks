//https://egghead.io/lessons/react-avoid-passing-props-deeply-by-using-react-context

import React, {useState} from "react";

import { UserConsumer } from '../../UserContext';


const Playground = () => {

    //note: hooks must be called at the top level.
    //https://reactjs.org/docs/hooks-rules.html

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
        <UserConsumer>
            {({user}) => 
                <section>
                    <h3>Playground component</h3>
                    <p>Mirrors the input values</p>
                    <p>hello {user}</p>
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
                        <li>Input value: {text}</li>
                        <li>Checkbox value: {checked.toString()}</li>
                        <li>Current User: {user}</li>
                    </ul>
                </section>
            }
        </UserConsumer>
    )

}


export default Playground;
