import React, { useState } from 'react'
import NestCom from './NestCom'

export default function Comment() {
    const [comment, setComment] = useState('')
    const [reply, setReply] = useState(false)
    const data = {
        id:1,
        item: []
    }
    const node ={
        id :'',
        name:'',
        item:[]
    }
    const MockData = {
        id:1,
        item:[
            {
                id:'12',
                name:'hello...',
                item:[
                    {
                        id:'123',
                        name:'heyyy',
                        item:[
                            {
                                id:'1234',
                                name:'how are you?',
                                item:[
                                    {
                                        id:'1235',
                                        name:'i am good, thanks',
                                        item:[]
                                    }
                                ]
                            },
                            {
                                id:'1235',
                                name:'heyyy yaa....',
                                item:[]
                            }
                        ]
                    }
                ]
            },
            {
                id:'13',
                name:'nice',
                item:[
                    {
                        id:'131',
                        name:'thank you',
                        item:[]
                    }
                ]
            }
        ]
    }
  return (
    <>
    <div><input type="text" name="" id="" onChange={(e)=>{return setComment(e.target.value) }}  /> <button>submit</button></div>
    {MockData.item.map((d)=>{return <div><p>{d.name} <i>reply</i></p><p>{d.item.length?<NestCom com = {d.item}/>:''}</p></div>})}
    <div>{comment}</div>
    </>
  )
}
