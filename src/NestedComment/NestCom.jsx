import React from 'react'

export default function NestCom({com}) {
    console.log("sam",com)
  return (
    <div style={{marginLeft:'100px'}}>
    <p>{com[0].name}   <i>reply</i></p>
    {com[0].item.length? com[0].item.map((m)=>{return <div style={{marginLeft:'100px'}}><p >{m.name}  <i>reply</i></p><p>{m.item.length?<NestCom com = {m.item}/>:''}</p></div>}):''}
    </div>
  )
}
