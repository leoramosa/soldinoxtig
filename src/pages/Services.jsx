/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from "../context/AppContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './styles/services.css'
import Products from "../pages/Products";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;
  return (
    <>
      <div className="content_services">
        <div className="content">
          <div className="title-event">
          <p>
            Mis Servicios

          </p>
          </div>
          
          <div className="services_detail">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              1228: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            /* onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} */
          >
          {services.map((service, i) => (
            <SwiperSlide key={service+i}>
              <div className="content-all-swiper">
                      <div  className="content-swiper">
                      <div className="content-imagen">
                     
                        <img src={service.image} alt={service.name}/>
                      </div>
                        <div className="detalle">
                          <p className="detail-title">{service.name}</p>
                          <p className="detail-price">{service.price}</p>
                          <div className="little-description">
                              <div className="breve">{service.breve}</div>
                          </div>

                            { service.buttontype === 'solicitar' ? 
                              <div className="content-button">
                            <div className="content-bo">
                              <button className="button-whatsapp" type="button">
                              <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${service.mensaje}`} rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-whatsapp"></i> {service.buttontype}
                                 </a>
                                </button> 
                                
                                
                                </div>
                                <div className="content-bt">
                                <Link className="detail-ver" to={`/${service.tipo}/${service.details}`}>ver más</Link>
                                </div>
                                </div>

                                : 
                                <div className="content-button-disable-service">
                                  <div className="button-whatsapp-disable">{service.buttontype}</div>
                                </div>
                                
                            
                            }


                        </div>
                    </div>
              </div>
              </SwiperSlide>
                ))}
          </Swiper>
          </div>
          <div className="details-products">
            <Products/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;