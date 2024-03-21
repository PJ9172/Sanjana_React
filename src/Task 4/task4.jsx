// 
import { useState } from "react"

export default function Task() {
    var [color, setColor] = useState("");
    return (
        <>
            
                <center>
                <Button color="Red"  set={setColor}/>
                <Button color="Yellow"  set={setColor}/>
                <Button color="Blue"  set={setColor}/>
                <Button color="Purple" set={setColor}/>
                <Button color="Pink"  set={setColor}/>
                </center>
                <Box co={color} />
        </>
    )
}

function Box(props) {
    
        document.body.style.backgroundColor=`${props.co}`
}


function Button(props) {
        console.log(props);
    return (
        
        <button style={{width:"80px",height:"40px",fontWeight:"bold",marginTop:"40px",marginLeft:"30px"}}onClick={() => {

            props.set(props.color)

        }}>{props.color}</button>
    )
}