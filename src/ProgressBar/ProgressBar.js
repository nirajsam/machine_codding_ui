import React from 'react'
import './ProgressBar.css'
function ProgressBar() {
  const [perc, setPerc] = React.useState(0)
  const [start, setStart] = React.useState(false)

  React.useEffect(() => {
    if(start){
      function updatePerc(x) {
        setPerc(x)
      }
      let interval  = setTimeout(updatePerc,1000,perc+10)
      if(perc>90){
        clearInterval(interval)
      }
      // if(perc>=101){
      //   setPerc(0)
      // }
    }
  }, [start,perc])
  
  return (
    <div style={{display:"grid",justifyContent:"center"}}>
    <div className='dabba'>
      <div className={`container container-${perc}`} style={{width:`${perc}%`,height:"100%",backgroundColor:"green"}}>{perc}</div>
    </div>
    <button className='button' aria-describedby='enrolled button' type="button" onClick={e=>{return setStart(!start)}}>start</button>
    </div>
  )
}

export default ProgressBar