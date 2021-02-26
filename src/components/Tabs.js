import React, { useContext, useState }from 'react'
import  AppContext   from '../context/AppContext';
import "./styles/tabs.css";
import imgvideo2 from '../images/sol8.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import ModalVideoTwo from '../components/ModalVideoTwo'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Tabs() {
  const {state} = useContext(AppContext)
  const { products } = state;
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [showModalvideo2, setShowModalvideo2] = useState(false);


  const OpenModalvideo2 = () => {
    setShowModalvideo2(true);
  };

  const CloseModalvideo2 = () => {
    setShowModalvideo2(false);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Fotos
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Videos
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay= {{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
     
            /* onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} */
          >
          {products[6].images.map((product, i) => (
            <SwiperSlide key={product+i}>
              <img src={product.img} alt=""/>
              
               </SwiperSlide>
                ))}
          </Swiper>
          
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div 
          className="img-two"
          onClick={OpenModalvideo2}
          >
            <img src={imgvideo2} alt=""/>
          </div>
    
          
        </div>
      </div>
      <ModalVideoTwo CloseModalvideo2={CloseModalvideo2} showModalvideo2={showModalvideo2}/>
    </div>
  );
}

export default Tabs;