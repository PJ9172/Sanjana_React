import { useState } from "react"

export default function Form() {
    var [n, setName] = useState("Student")

    return (
        <>
            <h4>Name : {n}</h4>

            <input type="text" id="name" value={n} onChange={() => {
                var name = document.getElementById('name');
                console.log(name.value);
                setName(name.value)
            }} /> <br /><br />
            <button onClick={() => {
                setName("Student")
            }}>Reset</button>

        </>
    )
}