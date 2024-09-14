import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
   <nav style={{color:"black"}}> 

<div> 🏠regresar el inicio</div> 

    <ul>

<li>tarjetas de video</li>
<li>placas madres</li>
<li>procesadores </li>

    </ul>

    <CartWidget/>

   </nav>
  
  )
}
