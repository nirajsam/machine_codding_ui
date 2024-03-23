import React, { useState } from 'react'
import './CheckAndMove.css'
import {listItems1, listItems2} from '../data'
function CheckAndMove() {
    const [checkArr, setCheckArr]=useState([])
    const [box, setBox]=useState(0)
    // const [isChecked, setIsChecked]=useState(false
    const clickCheckBox = (e,ele,box) => {
        console.log("sam",e,ele)
        if(e.target.checked && checkArr.indexOf(ele)=== -1){
            let arr = [...checkArr]
            arr.push(ele)
            setCheckArr(arr)
        }
        if(e.target.checked===false && checkArr.indexOf(ele)!== -1){
            let arr = [...checkArr]
            arr.splice(checkArr.indexOf(ele),1)
            setCheckArr(arr)
        }
        setBox(box)
    }
    console.log("sam",checkArr,"l2",listItems2)
    const clickForwardArrow = () => {
        console.log("nk")
        listItems2.push(...checkArr); // Push the new values
        for (let i = 0; i < checkArr.length; i++) {
            listItems1.splice(listItems1.indexOf(checkArr[i]),1)  
        }
        console.log("bkl",listItems2)
        setCheckArr([])
        
    }
    const clickBackwardArrow = () => {
        listItems1.push(...checkArr); // Push the new values
        for (let i = 0; i < checkArr.length; i++) {
            listItems2.splice(listItems2.indexOf(checkArr[i]),1)  
        }
        setCheckArr([])
        console.log("bkl2",listItems1)
    }
    return ( <div className='checkandmove'>
        <div className='checkandmove--box1'>
            <ul>
                {listItems1.map((item,index) => {
                    return <li className='checkandmove-list' id={`list-${index}`} >
                        <input type="checkbox" name="" id={`${index}`} checked = {checkArr.indexOf(item)!==-1}  onChange={e=> {return clickCheckBox(e,item, 1)}} />
                        <span >{item}</span>
                    </li>
                })
                }
            </ul>
        </div>
        <div className='checkandmove--box2'>
            <ul>
                <li className='checkandmove-list'><button disabled={box!==1} onClick={()=>{return clickForwardArrow()}}>move ➡️</button></li>
                <li className='checkandmove-list'><button disabled={box!==2} onClick={()=>{return clickBackwardArrow()}}>⬅️ move</button></li>
            </ul>
        </div>
        <div className='checkandmove--box2'> 
            <ul>
            {listItems2.map((item, index) => {
                return <li className='checkandmove-list'>
                <input type="checkbox" name="" checked = {checkArr.indexOf(item)!==-1}  id={`${index}`} onChange={e=> {return clickCheckBox(e,item, 2)}} />
                <span>{item}</span>
            </li>
            })}
            </ul>
        </div>
    </div> );
}

export default CheckAndMove;