import React from 'react'
import './styles/footer.css'
import './styles/Footertwo.scss'
import { Link } from "react-router-dom";
 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
         <div className="info">
           <p className="title-info">Contáctanos</p>
           <div className="">
            <p>Teléfono: +51 981 325 313</p>
            <p>Email: ventas@soldinoxtig.com</p>
            <p>Direción: Pasaje Miguel ibérico 1891, cercado de lima</p>
           </div>
         </div>
         <div className="redes">
            <p className="title-info">Síguenos:</p>
            <div className="icon-redes">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>

            </div>
         </div>
         <div className="explorer">
           <p className="title-info">Destacados</p>
           <div className="link-footer">
           <Link className="footerLink" to="/productos-fabricados"><p>Productos Fabricados</p></Link> 
            <Link className="footerLink" to="/servicios"><p>Servicios</p></Link> 
             
           </div>
         </div>
       </div>
       <div className="derechos desktop">
         <p>© Copyright Soldinoxtig 2021 -Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>
       <div className="derechos mobile">
         <p>© Copyright Soldinoxtig 2021
           <br/>
           Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>
       </div>
     </div>
    </>
  )
}

export default Footer;
