import React from 'react'
import './styles/about.css'
import alexia from './../images/about-back.png'
import alexiaMobile from './../images/about-mobile.png'

 const Home = () => {
  return (
    <>
      <div className="content_about">
        <div className="content_about-global desktop">
          <div className="content_img-about">
            <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="about-img">
            <img src={alexia} alt=""/>
          </div>
          </div>
          <div className="content_detail-about">
            <div className="info-autor">
              <p>
              Mi nombre es Alexia Fernández soy <b>astróloga,</b> <b>terapeuta holística</b> y <b>canalizadora</b>. Estoy aquí para ayudarte y acompañarte en tu camino por esta tierra.
            <br/><br/>
            Los sucesos que viví a lo largo de mi vida me permitieron expandir mi conciencia y darme cuenta que somos más que materia, más que un cuerpo físico. Somos un ser completo en toda la dimensión. Somos parte de un infinito, el cual vive en el interior de cada uno de nosotros. Empecé mi camino espiritual aprendiendo astrología védica, siguiendo con estudios en astrología psicológica, eniología y numerología pitagórica. Ahora he decidido ayudar a quienes necesitan guía en este tránsito. Por eso decidí abrir este espacio, para que cada uno de los que pase por aquí pueda reencontrarse con esa luz que vive en su interior. 

              </p>
            </div>
          </div>

          
        </div>

        <div className="content_about-global mobile">
          <div className="content_img-about">
            <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="about-img">
            <img src={alexiaMobile} alt=""/>
          </div>
          </div>
          <div className="content_detail-about">
            <div className="info-autor">
            <p>
              Mi nombre es Alexia Fernández soy <b>astróloga,</b> <b>terapeuta holística</b> y <b>canalizadora</b>. Estoy aquí para ayudarte y acompañarte en tu camino por esta tierra.
            <br/><br/>
            Los sucesos que viví a lo largo de mi vida me permitieron expandir mi conciencia y darme cuenta que somos más que materia, más que un cuerpo físico. Somos un ser completo en toda la dimensión. Somos parte de un infinito, el cual vive en el interior de cada uno de nosotros. Empecé mi camino espiritual aprendiendo astrología védica, siguiendo con estudios en astrología psicológica, eniología y numerología pitagórica. Ahora he decidido ayudar a quienes necesitan guía en este tránsito. Por eso decidí abrir este espacio, para que cada uno de los que pase por aquí pueda reencontrarse con esa luz que vive en su interior. 

              </p>
            </div>
          </div>

          
        </div>
       
      </div>

    </>
  )
}

export default Home;