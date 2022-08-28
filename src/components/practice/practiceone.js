import React, { useEffect, useState } from "react";

const Practice = ()=>{
    const [num,setNum] = useState(0);
    const [value,setValue] = useState('')
    console.count('Renderd component main')

    useEffect(()=>{
        console.log('useEffect main');
        document.title = `Num Value : ${num}`
    },[num])

    var salary = 200;
    function abc(){
        console.log(`salary is ${salary}`)
        var salary = 500;
        console.log(`salary is ${salary}`)
        
    }
    abc()


    return(
        <>
        <div className="App">

            <h1>Practice Of UseEffect</h1>
            <h3>Num Value : {num}</h3>
            <input type='text' onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>setNum(num+1)}>Update Num</button>
        </div>
        </>
    )
}
export default Practice;
