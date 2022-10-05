import React from 'react'
import './style.css';
import { FaEnvira } from "react-icons/fa";


const Header = () => {  
  return (
    <div className='nav'>
      <div><FaEnvira className='icon' /> MY TODO LIST</div>
      <div>React</div>
    </div>
  )
}

export default Header