import React, {useState} from "react";


export default function Playground() {

    //using object!!!!!
    // recommendation by react team is to split state based on which variables are chagned together.

    // does not do a shallow merge. so you need to merge yourself.
    const [state, setState] = useState({
        text: "",
        checked: false
    });

    const handleCheckboxToggle = e => {
        setState(prevState => ({
            checked: !prevState.checked}));
    }

    // this is performing a shallow merge, similar to what a class component set state does.
    const mergeState = partialState => {
        setState(prevState => ({
            ...prevState,  //merge with prev state
            ...partialState  //return that
        }))
    }  

    return (
        <section>
            <h3>Playground Object State component</h3>
            <p>Mirrors the input values</p>
            <input 
            type="text"
            value={state.text}
            onChange={e => mergeState({text: e.target.value})}>
            </input>
            <input 
            type="checkbox"
            value={state.checked}
            onChange={e => mergeState({checked: !state.checked})}>
            </input>
            <ul>
                <li>{state.text}</li>
                <li>{state.checked.toString()}</li>
            </ul>
        </section>
    )

}