import React from 'react'
import './styles/about.css'
import imgAbout from '../images/about.png'
import { Link } from 'react-router-dom'

 const About = () => {
  return (
    <>
      <div className="content_about">
        
        <div className="about-header">
          <div className="about_overlay">
          <div className="about_container">
              <p className="about_title">Nuestra <strong>Historia</strong></p>
              <p className="about_info">Nuestra experiencia en el campo de la soldadura </p>
              <br/>
              <div className="link_contact">
              <Link to="/contacto" className="" >
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </Link>
              </div>
             
            </div>
          </div>
        </div>
        <div className="about_information">
          <div className="row_about">
       <p>
       E&r soldinoxtig s.a.c es una empresa dedicada a todo tipo de fabricación diseños y remodelación de productos en acero inoxidable.
       <br/><br/>
      Brindamos servicio de calidad y 100% de garantia en todos nuestros trabajos, tales como:
      <br/><br/>
      - Remodelación, mantenimiento de equipamentos en acero inoxidable.
      <br/><br/>
      realizamos nuestros trabajos con soldadura tig para finos acabados, asi mismo brindamos servicio de soldadura tig, acero, aluminio.


       </p>
       <p className="second_title">Nosotros:</p>
       <p>
       E&R SOLDINOXTIG S.A.C somos una empresa con más de 15 años de experiencia en el mercado nacional en la fabricación, mantenimiento y servicios en acero inoxidable.
       <br/><br/>
Nuestra experiencia en el campo de la soldadura y en el trabajo de este tipo de materiales, garantizan el más sólido respaldo, lo cual nos posiciona como un proveedor confiable y seguro.
<br/><br/>
Nuestro objetivo principal es cumplir y asistir a nuestros clientes con responsabilidad y seriedad desde el inicio con la mejor asistencia profesional para así cumplir con todas las expectativas.

       </p>
          </div>
          <div className="row_about">
            <div className="img_about">
              <img src={imgAbout} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;