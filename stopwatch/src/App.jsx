import { useRef, useState } from 'react'
import styles from './components/Main.module.css';
import '../index.css'

function App() {
  const[time,setTime]=useState(0);

  let refTimer=useRef(null);


  function startTimer(){
    refTimer.current=setInterval(()=>{
      setTime(time=>time+1)
    },1000);
  }
 
  function stopTimer(){
    clearInterval(refTimer.current);
    refTimer.current=null;
  }
  
 function resetTimer(){
    stopTimer();
    setTime(0);
  }
  

  return (

    <div className={styles['main-container']}>
    <h1>Stopwatch:{time} Seconds</h1>

    <button style={{fontSize:'50px',borderRadius:'10px',marginBottom:'30px', backgroundColor:'green'}} onClick={startTimer}>start</button>
    <br />
     <button style={{fontSize:'50px',borderRadius:'10px',marginBottom:'30px', backgroundColor:'red'}} onClick={stopTimer}>stop</button>
     <br />
      <button style={{fontSize:'50px',borderRadius:'10px',backgroundColor:'orange'}} onClick={resetTimer}>Reset</button>

    </div>

      
  
  )
}

export default App;
