import React, { useState } from 'react'
import './connectDot.css'
var l = []
  
  for (let i = 0; i < 6; i++) {
    let p = []
    for (let j = 0; j < 5; j++) {
        p.push({"color":"gray","name":""})  
    }
    l.push(p)
  }
function ConnectDot() {
  
  const [colorArray, setcolorArray] = useState(l)
  const [Change, setChange] = useState(false)
  console.log("array",l)
  const changeColor= (i,j) =>{
    console.log("call",i,j)
        if(Change){
            l[i][j]={"color":"blue","name":"N"}
        }else{
            l[i][j]={"color":"red","name":"P"}
        }
        setcolorArray(l)
        setChange(!Change)
  }
  return (
    <div className='connectdot'>
        <h2>Connect Dot Game</h2>
        {Change? <div>player 2</div>: <div>player 1</div>}
        {colorArray.map((x,i)=>{return(
            <tr className="tr" >
                {x.map((n,j)=>{return(
                    <td className="td" style={{border:` 2px solid ${n.color}`}} onClick={e=> {return changeColor(i,j)}}><span className="cd">{n.name}</span></td>
                )})}
            </tr>
        )})}
    </div>
  )
}

export default ConnectDot