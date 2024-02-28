import {useState}  from 'react'
import './About.css'

function About() {

  const [Count,setCount] = useState(0);
  const changeCount = ()=>{
    setCount(Count+1);
  };
  return (
    <div className='counter'>
      <button className='btn' onClick={changeCount}>count : {Count}</button>
    </div>
  )
}

export default About
