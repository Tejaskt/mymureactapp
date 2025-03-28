import React from 'react'
function HookDemo(){

    const [counter, setCounter] = React.useState(99)
    const [color, setColor] = React.useState("Red")
    const [name, setName] = React.useState("")
 


    return(
    <>
    <h1>Counter Example</h1>
    Counter Value is {counter}
    <hr/>   
    <input type="button" value="+" onClick={()=>setCounter(counter+1)}/>
    <input type="button" value="-" onClick={()=>setCounter(counter-1)}/>
    <hr/>
    Color Value is {color}
    <input type="button" value="Update" onClick={()=>setColor('Green')}/>
    <hr/>
    Name: <input type="text" onChange={(e)=>setName(e.target.value)}/>
    Name Value is {name}
    </>
    )
}
export default HookDemo