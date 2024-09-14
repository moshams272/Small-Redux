import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "../store/slices/userName";
import { decrement, increment } from "../store/slices/counter";
export default function Home(){
    const counter=useSelector((state)=>state.counter.counter);
    const userName=useSelector((state)=>state.userName.userName);
    const disPatch=useDispatch();
    const toggleName=()=>{
        disPatch(changeUserName((userName=="Shams")?"Nour":"Shams"));    
    }
    return(
        <>
        <p>Hello {userName}</p>
        <button onClick={()=>{toggleName()}}>Toggle Name</button>
        <br />
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"120px"}}>
        <button style={{width:"40px",height:"40px",fontSize:"23px",color:"blue"}} onClick={()=>{disPatch(increment())}}>+</button>
        <p> {counter} </p>
        <button style={{width:"40px",height:"40px",fontSize:"23px",color:"red"}} onClick={()=>{disPatch(decrement())}}>-</button>
        </div>
        </>
    )
}