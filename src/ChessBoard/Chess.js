import React from 'react'
import './chess.css'
function Chess() {
    const [diaArray, setDiaArray] = React.useState([])
    const targetBlock = (val) =>{
        let ar =[]
        let p = parseInt(val.slice(-2))
        ar.push(p)
        leftTop(p)
        function leftTop(p) {
            let lt = p-9
            if(lt>=1 && ([9,17,25,33,41,49,57].indexOf(p)===-1)){
                ar.push(lt)
                return leftTop(lt)
            }
        }
        rightTop(p)
        function rightTop(p) {
            let rt = p-7
            if(rt>=1 && ([8,16,24,32,40,48,56,64].indexOf(p)===-1)){
                ar.push(rt)
                return rightTop(rt)
            }
        }
        leftBottom(p)
        function leftBottom(p) {
            let lb = p+7
            if(lb<=64 && ([9,17,25,33,41,49,57].indexOf(p)===-1)){
                ar.push(lb)
                return leftBottom(lb)
            }
        }
        rightBottom(p)
        function rightBottom(p) {
            let rb = p+9
            if(rb<=64 && ([8,16,24,32,40,48,56,64].indexOf(p)===-1)){
                ar.push(rb)
                return rightBottom(rb)
            }
        }
        setDiaArray(ar)
    }
    // React.useEffect(() => {
    //   console.log("sam")
    // }, [diaArray])
    // console.log(diaArray)
  return (
    <div className='chessBoard' onClick={e=>{return targetBlock(e.target.className)}}>
        <tr>
            <td className="black 01" style={diaArray.indexOf(1)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 02" style={diaArray.indexOf(2)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 03" style={diaArray.indexOf(3)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 04" style={diaArray.indexOf(4)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 05" style={diaArray.indexOf(5)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 06" style={diaArray.indexOf(6)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 07" style={diaArray.indexOf(7)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 08" style={diaArray.indexOf(8)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
        <tr>
            <td className="white 09" style={diaArray.indexOf(9)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 10" style={diaArray.indexOf(10)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 11" style={diaArray.indexOf(11)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 12" style={diaArray.indexOf(12)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 13" style={diaArray.indexOf(13)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 14" style={diaArray.indexOf(14)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 15" style={diaArray.indexOf(15)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 16" style={diaArray.indexOf(16)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>    
        </tr>
        <tr>
            <td className="black 17" style={diaArray.indexOf(17)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 18" style={diaArray.indexOf(18)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 19" style={diaArray.indexOf(19)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 20" style={diaArray.indexOf(20)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 21" style={diaArray.indexOf(21)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 22" style={diaArray.indexOf(22)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 23" style={diaArray.indexOf(23)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 24" style={diaArray.indexOf(24)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
        <tr>
            <td className="white 25" style={diaArray.indexOf(25)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 26" style={diaArray.indexOf(26)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 27" style={diaArray.indexOf(27)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 28" style={diaArray.indexOf(28)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 29" style={diaArray.indexOf(29)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 30" style={diaArray.indexOf(30)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 31" style={diaArray.indexOf(31)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 32" style={diaArray.indexOf(32)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
        <tr>
            <td className="black 33" style={diaArray.indexOf(33)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 34" style={diaArray.indexOf(34)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 35" style={diaArray.indexOf(35)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 36" style={diaArray.indexOf(36)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 37" style={diaArray.indexOf(37)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 38" style={diaArray.indexOf(38)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 39" style={diaArray.indexOf(39)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 40" style={diaArray.indexOf(40)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
        <tr>
            <td className="white 41" style={diaArray.indexOf(41)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 42" style={diaArray.indexOf(42)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 43" style={diaArray.indexOf(43)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 44" style={diaArray.indexOf(44)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 45" style={diaArray.indexOf(45)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 46" style={diaArray.indexOf(46)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 47" style={diaArray.indexOf(47)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 48" style={diaArray.indexOf(48)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
        <tr>
            <td className="black 49" style={diaArray.indexOf(49)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 50" style={diaArray.indexOf(50)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 51" style={diaArray.indexOf(51)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 52" style={diaArray.indexOf(52)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 53" style={diaArray.indexOf(53)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 54" style={diaArray.indexOf(54)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 55" style={diaArray.indexOf(55)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 56" style={diaArray.indexOf(56)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
        <tr>
            <td className="white 57" style={diaArray.indexOf(57)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 58" style={diaArray.indexOf(58)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 59" style={diaArray.indexOf(59)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 60" style={diaArray.indexOf(60)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 61" style={diaArray.indexOf(61)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 62" style={diaArray.indexOf(62)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="white 63" style={diaArray.indexOf(63)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
            <td className="black 64" style={diaArray.indexOf(64)===-1?{}:{border:"3px solid green",boxShadow:"inset 0 0 0 1000px rgba(0,0,0,.2)"}}></td>
        </tr>
    </div>
  )
}

export default Chess