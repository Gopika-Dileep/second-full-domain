import { useState } from "react"
import Child from "./Child"
function App(){
  
    const [value,setValue] = useState()
    function setmsg (data){
        setValue(data)
    }
    return(
        <>
        <p>msg:{value}</p>
        <Child setmsg={setmsg}/>
        </>
    )

}

export default App