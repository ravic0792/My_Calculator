import styles from "./Display.module.css"
function Display({expression}){

  return   <input className={styles.display} type="text" value={expression} readOnly/>
}

export default Display;