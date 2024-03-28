import React from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router-dom'
import './NavBarComponent.css'

const NavBarComponent :React.FC = () => {

  const activeStyle = 'active-link';

  return (
    <nav className='navbar-container'>
      <div className='icons-container'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <ul className='routes-container'>
        <li className='link-item'>
          <NavLink
            to='/home/mfReact/a'
            className={({isActive}) => isActive ? activeStyle : ""}
            >
            Micro-front React A
          </NavLink>
        </li>
        <li className='link-item'>
          <NavLink
            to='/home/mfReact/b'
            className={({isActive}) => isActive ? activeStyle : ""}
            >
            Micro-front React B
          </NavLink>
        </li>
{/*         <li className='link-item'>
          <NavLink
            to='/home/mfAngular/a'
            className={({isActive}) => isActive ? activeStyle : ""}
            >
            Micro-front Angular B
          </NavLink>
        </li> */}
      </ul>

      <div className='description-container'>
        Shell built with react.js
      </div>
    </nav>
  )
}

export default NavBarComponent