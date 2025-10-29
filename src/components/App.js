import React from "react";
import './../styles/App.css';

const App = () => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [text, setText] =  useState("")
  function changeHandler(e){
    const value = e.target.value
    if(!value){
      setIsEmpty(false)
    }else{
      setIsEmpty(true)
      text ="Hello, " + e.target.value
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
      <label>Enter your name: </label>
      <input type = "text" onChange={()=>{changeHandler(e)}}>
      <p>
      {!isEmpty && <p>{text}</p>}
      </p>
    </div>
  )
}

export default App
