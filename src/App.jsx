import styles from "./App.module.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react"
function App() {
  let [expression,setExpression]=useState("");
  function handleClick(event,buttonName){

    let newExpression='';
    if(buttonName==='='){
      let ans=eval(expression);
      newExpression=newExpression+ans;
    }else if(buttonName==='c'){
     newExpression=newExpression;
    }else{
      newExpression=expression+buttonName;
    }
   
    setExpression(newExpression);
  }
  return (
    <div className={styles.calculator}>
        <Display expression={expression}/>
        <ButtonsContainer handleClick={handleClick}/>
    </div>
  )
}

export default App
