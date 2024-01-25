import React from "react";
import useStorage from "./Custom Hooks/useStorage";


const App=()=>{
  const {setStorage} = useStorage();
  return(
    <div>
      <input style={{alignItems:"center",height:"3vh",width:"20vw",marginTop:"200px",marginLeft:"500px",borderColor:"black",borderRadius:"20px"}} type="text" placeholder="Enter some text"onChange={(e)=>setStorage(e.target.value)}/>
    </div>
  )
}
export default App