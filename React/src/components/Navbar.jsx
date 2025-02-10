import React from 'react'
import link from 'react-router-dom'

const NavbarMenu = [
    {id: 1, title:'home',link:"/"},
    {id: 2, title:'produtos',link:"/Produtos"},
    {id: 3, title:'contato',link:"/Contato"}
]

const Navbar = () => {
  return (
    <>
    <ul className='flex gap-10'>
    {NavbarMenu.map((menu)=> 
     <li key={menu.id}> 
        <Link to={menu.link}>{menu.title}</Link>
     </li>
    )}
    </ul>
    </>
  )
}

export default Navbar
