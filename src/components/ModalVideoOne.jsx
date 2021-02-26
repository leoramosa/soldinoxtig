import React from 'react';

import ReactDOM from 'react-dom';


/* import CheckIcon from '@material-ui/icons/Check'; */
import './styles/ModalOne.css';
/* video */
import VideoPlayer from 'react-video-js-player';



const ModalVideoOne = (props) =>{

  const videoSrc = "https://apiweb.netlify.app/images/soldi/product/soldi-video-1.mp4";
  const poster =
  "https://apiweb.netlify.app/images/soldi/product/bar1.jpg";
  
  if (!props.showModalvideo1) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal ">
      <div className="Modal__container animate__animated animate__bounce animate__flipInY">
        <button onClick={props.CloseModalvideo1} className="Modal__close-button">
          X
        </button>
        <div className="Modal__container-element">

          <div className="element__description">
          <div className="title-event-place">
            <div className="line_color"></div>
            <p>
            Barandas y pasamanos en acero inoxidable
            </p>
          </div>
         
            <div  className="wrapperImg">
            <VideoPlayer
              src={videoSrc}
              poster={poster}
             
              className="videoPlayer"
            />
              </div>
          
            

          </div>
        </div>
      </div>
    </div>,
    document.getElementById('ModalVideoOne')
  );
}

export default ModalVideoOne;
