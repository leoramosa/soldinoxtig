
import React,  { useContext }  from 'react'
import {Link} from 'react-router-dom'
import AppContext from "../context/AppContext";
import './styles/services.css'
// Import Swiper React components
import 'swiper/swiper.scss';

function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;

  
  return (
    <>
      <div className="content_services">
          <div className="title-event">
            <div className="line_color"></div>
            <p>
              Nuestros servicios
            </p>
          </div>
          {services.map((service, i) => (
          <div key={i} className={`row_service ${service.column}`} >
          <div className="content-service-g">
                  <div className="services_all" >
                    <div className="wrapper_all">
    
                    <p className="detail-title">{service.name}</p>
                    <div className="breve">{service.breve1}</div>
                    <div className="breve">{service.breve2}</div>
                    <div className="breve"> &nbsp;&nbsp; {service.breve3}</div>
                    <div className="content-button">
                        <div className="content-bo">
                            <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=519999999999&text=${service.mensaje}${service.name}`} rel="noopener noreferrer" target="_blank">
                              <button className="button-whatsapp" type="button">
                                  <i className="fab fa-whatsapp"></i> {service.buttontype}
                              </button> 
                            </a>
                        </div>
                        <div className="content-bt">
                          <Link className="detail-ver" to={`/servicios/${service.link}`} >ver más</Link>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two">
                      <div className="wrapper_img">
                        <img className="" src={service.image} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>

))}
        
        </div>
    </>
  )
}

export default Services;