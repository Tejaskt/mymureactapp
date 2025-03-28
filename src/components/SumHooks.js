import React from "react";

function SumHooks(){
    const [data, setData] = React.useState({});
    const [sum, setSum] = React.useState(0);

    const doSum = () =>{
        var c = parseInt(data.no1) + parseInt(data.no2)
        setSum("sum is " + c);
    }
return(<>
    <h1>Sum</h1>
    No1 : <input type="text" onChange={(e)=>setData({...data,no1:e.target.value})}/>
    No2 : <input type="text" onChange={(e)=>setData({...data,no2:e.target.value})}/>

    <input type="button" value="sum" onClick={doSum}/>
    {sum}
    </>)

}
export default SumHooks;