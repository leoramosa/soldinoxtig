import React from 'react'
import './styles/home.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);



 const Home = () => {
  return (
    <>

      <div className="content_home">
        <NavBar/>
        <div className="Home_container">
        <div className="swiper_content_app">
          <Swiper
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              navigation
             /*  loop={true} */
              /* autoplay= {{
                delay: 2500,
                disableOnInteraction: false,
              }} */
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="swid"
            >
              <SwiperSlide className="swiper_container-box_1">
                    <div className="overlay">
                      <div className="img_content">
                        
                          <p className="title_overlay">

                        Escaleras |
                        <br/>
                        <span>Interiores</span> 
                          </p>
                        </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_2">
                    <div className="overlay">
              <div className="img_content">
                   
                      <p className="title_overlay">
                        Piscinas | 
                        <br/>
                        <span>Exteriores</span> 
                      </p>
                    </div>
                  </div>
              </SwiperSlide>
             
            </Swiper>
          </div>

          <div className="projects">
            <p className="project_title">PROYECTOS</p>
            <div className="project_count">
              <div className="project_box">
                <div className="project_img">
                  <img src={project1} alt=""/>
                </div>
                <div className="project_info">
                  <p className="project_info_title">Piscinas</p>
                  <a className="project_plus" href>ver más</a>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img">
                  <img src={project2} alt=""/>
                </div>
                <div className="project_info">
                <p className="project_info_title">Barandas</p>
                  <a className="project_plus" href>ver más</a>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img">
                  <img src={project3} alt=""/>
                </div>
                <div className="project_info">
                <p className="project_info_title">Muebles</p>
                  <a className="project_plus" href>ver más</a>
                </div>
              </div>
            </div>
            <div className="project_button">
              <a href>
                <button type="button">
                  ver más proyectos
                </button>
              </a>
            </div>
          </div>
          </div>
          <Footer/>
      </div>
      
     
    </>
  )
}

export default Home;