import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'



const ServiceOne = () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service">
          <div className="header-content">
            <div className="overlay_service">
                <div className="content-title">
                    <p>
                      {services[2].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
              <li>Hacemos remodelaciones de todo tipo con acero inoxidable.</li>
            </ul>
            <div className="detail_request">
             <div>Más información: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51981325313&text=${services[2].mensaje}${services[2].name}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> cotizar</a></div> 
            </div>
            <div className="detail_requestTwo">
            Llamanos : <a href="tel://+51981325313" className="btn_call"><i className="fas fa-phone-alt"></i> +51 981 325 313</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={services[2].image} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
