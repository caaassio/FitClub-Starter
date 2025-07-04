import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo2.png"
import Bars from "../../assets/bars.png"
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = React.useState(false);
  return (
    <div className="header">

    <img src={Logo} alt="" className='logo' />
    {menuOpened === false && mobile === true ? (
      <div
        style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px",
        }}
        onClick={() => setMenuOpened(true)}
      >
        <img src={Bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }}/>
      </div>
    ) : (
      <ul className='header-menu'>
        <li><Link
          onClick={()=>setMenuOpened(false)}
          to='hero'
          span={true}
          smooth={true}
        >Home</Link></li>

        <li><Link
           onClick={()=>setMenuOpened(false)}
           to='programs'
           span={true}
           smooth={true}
        >Programas</Link></li>

        <li><Link
           onClick={()=>setMenuOpened(false)}
           to='reasons'
           span={true}
           smooth={true}
        >Por que nós</Link></li>

        <li><Link
            onClick={()=>setMenuOpened(false)}
            to='plans'
            span={true}
            smooth={true}
        >Planos</Link></li>

        <li><Link 
          onClick={()=>setMenuOpened(false)}
          to='Testimonials' 
          span={true} 
          smooth={true}
        >Depoimentos</Link></li>
    </ul>
    )}
    </div>
  )
}
  
export default Header