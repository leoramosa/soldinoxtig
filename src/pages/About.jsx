import React from 'react'
import './styles/about.css'
import imgInfo from '../images/about_only2.png'

 const Home = () => {
  return (
    <>
      <div className="content_about">
        <div className="about-header">
          <div className="about_overlay">
          <div className="about_container">
              <p className="about_title">Nuestra <strong>Historia</strong></p>
              <p className="about_info">Nuestra experiencia en el campo de la soldadura </p>
              <br/>
              <a className="" href>
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="about_information">
          <div className="row_about">
            <p>E&R SOLDINOXTIG S.A.C somos una empresa con más de 15 años de experiencia en el mercado nacional en la fabricación, mantenimiento y servicios en acero inoxidable.
              <br/><br/>
            Nuestra experiencia en el campo de la soldadura y en el trabajo de este tipo de materiales, garantizan el más sólido respaldo, lo cual nos posiciona como un proveedor confiable y seguro.
            <br/><br/>
            Nuestro objetivo principal es cumplir y asistir a nuestros clientes con responsabilidad y seriedad desde el inicio con la mejor asistencia profesional para así cumplir con todas las expectativas.
            </p>
          </div>
          <div className="row_about">
            <div className="">
              <img src={imgInfo} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;