import { useState } from "react"
import './t6.css'
export default function Array(){
    var ary=[1,2,3,4]
    const [data,setData]=useState(ary)
    console.log(data);
    return(
        <>
        <center>
      
        
        <div className="row"> 
        {
            data.map((e,i)=>{
                return(
                     <div className="box" key={i}>
                        <span>{e}</span>
                    </div>
                     )
                    })
        }
                    </div>
        <button onClick={()=>{
            var convert=[...data];
            // data.reverse();
            // setData(data)
            convert.reverse();
            setData(convert)
        }}>REVERSE</button>
        </center>
        </>
    )
}