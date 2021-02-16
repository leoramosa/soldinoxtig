
import React from 'react'

import './styles/project.css'
/* images */


import pis1 from '../images/pis1.jpg'
import pis2 from '../images/pis2.jpg'
import pis3 from '../images/pis3.jpg'
import pis4 from '../images/pis4.jpg'

import coc1 from '../images/coc1.jpg'
import coc2 from '../images/coc2.jpg'
import coc3 from '../images/coc3.jpg'
import coc4 from '../images/coc4.jpg'

import parr1 from '../images/parr1.jpg'
import parr2 from '../images/parr2.jpg'
import parr3 from '../images/parr3.jpg'
import parr4 from '../images/parr4.jpg'

import bar1 from '../images/bar1.jpg'
import bar2 from '../images/bar2.jpg'
import bar3 from '../images/bar3.jpg'
import bar4 from '../images/bar4.jpg'

import hog1 from '../images/hog1.jpg'
import hog2 from '../images/hog2.jpg'
import hog3 from '../images/hog3.jpg'
import hog4 from '../images/hog4.jpg'

import acc1 from '../images/acc1.jpg'
import acc2 from '../images/acc2.jpg'
import acc3 from '../images/acc3.jpg'
import acc4 from '../images/acc4.jpg'




function Projects () {

 
  let thumbnails = document.getElementsByClassName('thumbnail');
  let thumbnailsTwo = document.getElementsByClassName('thumbnailTwo');
  let thumbnailsThree = document.getElementsByClassName('thumbnailThree');
  let thumbnailsFour = document.getElementsByClassName('thumbnailFour');
  let thumbnailsFive = document.getElementsByClassName('thumbnailFive');
  let thumbnailsSix = document.getElementsByClassName('thumbnailSix');

  let activeImages = document.getElementsByClassName('active');
  let activeImagesTwo = document.getElementsByClassName('activeTwo');
  let activeImagesThree = document.getElementsByClassName('activeThree');
  let activeImagesFour = document.getElementsByClassName('activeFour');
  let activeImagesFive = document.getElementsByClassName('activeFive');
  let activeImagesSix = document.getElementsByClassName('activeSix');

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
      console.log(activeImages);

      if (activeImages.length > 0) {
        activeImages[0].classList.remove('active');
      }

      this.classList.add('active');
      document.getElementById('featured').src = this.src;
    });
  };



  for (var l = 0; l < thumbnailsTwo.length; l++) {
    thumbnailsTwo[l].addEventListener('mouseover', function () {
      console.log(activeImagesTwo);

      if (activeImagesTwo.length > 0) {
        activeImagesTwo[0].classList.remove('activeTwo');
      }

      this.classList.add('activeTwo');
      document.getElementById('featuredTwo').src = this.src;
    });
  }
  
  for (var p = 0; p < thumbnailsThree.length; p++) {
    thumbnailsThree[p].addEventListener('mouseover', function () {
      console.log(activeImagesThree);

      if (activeImagesThree.length > 0) {
        activeImagesThree[0].classList.remove('activeThree');
      }

      this.classList.add('activeThree');
      document.getElementById('featuredThree').src = this.src;
    });
  }

  for (var t = 0; t < thumbnailsFour.length; t++) {
    thumbnailsFour[t].addEventListener('mouseover', function () {
      console.log(activeImagesFour);

      if (activeImagesFour.length > 0) {
        activeImagesFour[0].classList.remove('activeFour');
      }

      this.classList.add('activeFour');
      document.getElementById('featuredFour').src = this.src;
    });
  }

  for (var m = 0; m < thumbnailsFive.length; m++) {
    thumbnailsFive[m].addEventListener('mouseover', function () {
      console.log(activeImagesFive);

      if (activeImagesFive.length > 0) {
        activeImagesFive[0].classList.remove('activeFive');
      }

      this.classList.add('activeFive');
      document.getElementById('featuredFive').src = this.src;
    });
  }

  for (var d = 0; d < thumbnailsSix.length; d++) {
    thumbnailsSix[d].addEventListener('mouseover', function () {
      console.log(activeImagesSix);

      if (activeImagesSix.length > 0) {
        activeImagesSix[0].classList.remove('activeSix');
      }

      this.classList.add('activeSix');
      document.getElementById('featuredSix').src = this.src;
    });
  }
  



 

  
  
  return (
    <>
      <div className="projects_content">
      <div className="title-event">
            <div className="line_color"></div>
            <p>
              Productos fabricados
            </p>
          </div>
          <div id="project_container">
            <div className="project-und">
              <div className="content-one">
                <div className="img_firts">
                  <img id="featured"  src={hog1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnail active" src={hog1} alt=""/>
                    <img className="thumbnail" src={hog2} alt=""/>
                    <img className="thumbnail" src={hog3} alt=""/>
                    <img className="thumbnail" src={hog4} alt=""/>
                  </div>
                  <div className="img_arrow_right"></div>
                </div>
              </div>
              <div className="content-two">
                <div className="">
                <p>	MUEBLES PARA EL HOGAR EN ACERO INOXIDABLE</p>
                <div>
                  <ul>
                    <li> Muebles para comedor</li>   
                    <li>  Consola con vidrio</li>
                    <li> Mesas de centro y laterales con vidrio</li>   
                    <li>Bases en acero inoxidable</li>   
                    <li> Puertas en acero inoxidable</li>   
                    <li> Rejas en acero inoxidable</li> 
                    <li>protectores</li>    
                    <li>  Percheros</li> 
                    <li>  Porta maceteros</li> 
                  </ul>
                </div>
                </div>
                
                <div className="button_project">
                 <div className="">
                   <a href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank">
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href="https://api.whatsapp.com/send?phone=51981325313&text=Un%20gusto%20empresa%20Soldinoxtig%2C%20quisiera%20m%C3%A1s%20informacion%20sobre%20los%20productos%20fabricados%20de%20muebles%20para%20el%20hogar%20en%20acero%20inoxidable" rel="noopener noreferrer" target="_blank">
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href="tel://+51981325313" class="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="project-und">
              <div className="content-one">
                <div className="img_firts">
                  <img id="featuredTwo"  src={bar1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailTwo activeTwo" src={bar1} alt=""/>
                    <img className="thumbnailTwo" src={bar2} alt=""/>
                    <img className="thumbnailTwo" src={bar3} alt=""/>
                    <img className="thumbnailTwo" src={bar4} alt=""/>
                  </div>
                  <div className="img_arrow_right"></div>
                </div>
              </div>
              <div className="content-two">
                <div className="">
                <p>	BARANDAS Y PASAMANOS EN ACERO INOXIDABLE</p>
                <div>
                  <ul>
                    <li>Barandas modelo estándar</li>   
                    <li>Barandas con vidrio templado</li>
                    <li>barandas con pasamano de madera</li>   
                  </ul>
                </div>
                </div>
                
                <div className="button_project">
                 <div className="">
                   <a href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank">
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                     <a href="https://api.whatsapp.com/send?phone=51981325313&text=Un%20gusto%20empresa%20Soldinoxtig%2C%20quisiera%20m%C3%A1s%20informacion%20sobre%20los%20productos%20fabricados%20de%20barandas%20y%20pasamanos%20en%20acero%20inoxidable" rel="noopener noreferrer" target="_blank">
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href="tel://+51981325313" class="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="project-und">
              <div className="content-one">
                <div className="img_firts">
                  <img id="featuredThree"  src={acc1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailThree activeThree" src={acc1} alt=""/>
                    <img className="thumbnailThree" src={acc2} alt=""/>
                    <img className="thumbnailThree" src={acc3} alt=""/>
                    <img className="thumbnailThree" src={acc4} alt=""/>
                  </div>
                  <div className="img_arrow_right"></div>
                </div>
              </div>
              <div className="content-two">
                <div className="">
                <p>ACCESORIOS PARA INTERIORES</p>
                <div>
                  <ul>
                    <li>Accesorios para baño</li>   
                    <li>Accesorios para cocina</li>
                    <li> Escaleras modelo gato</li>   
                    <li> Tapas para pozo </li>   
                  </ul>
                </div>
                </div>
                
                <div className="button_project">
                 <div className="">
                   <a href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank">
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                     <a href="https://api.whatsapp.com/send?phone=51981325313&text=Un%20gusto%20empresa%20Soldinoxtig%2C%20quisiera%20m%C3%A1s%20informacion%20sobre%20los%20productos%20fabricados%20de%20accesorios%20para%20interiores" rel="noopener noreferrer" target="_blank">
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href="tel://+51981325313" class="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="project-und">
              <div className="content-one">
                <div className="img_firts">
                  <img id="featuredFour"  src={parr1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailFour activeFour" src={parr1} alt=""/>
                    <img className="thumbnailFour" src={parr2} alt=""/>
                    <img className="thumbnailFour" src={parr3} alt=""/>
                    <img className="thumbnailFour" src={parr4} alt=""/>
                  </div>
                  <div className="img_arrow_right"></div>
                </div>
              </div>
              <div className="content-two">
                <div className="">
                <p>	PARRILLAS EN ACERO INOXIDABLE</p>
                <div>
                  <ul>
                    <li>Cilindros parrilleros</li>   
                    <li> Caja china</li>
                    <li>Parrillas regulables</li>   
                    <li>Parrilla terraza</li>   
                    <li>Hornos</li>   
                  </ul>
                </div>
                </div>
                
                <div className="button_project">
                 <div className="">
                   <a href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank">
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                     <a href="https://api.whatsapp.com/send?phone=51981325313&text=Un%20gusto%20empresa%20Soldinoxtig%2C%20quisiera%20m%C3%A1s%20informacion%20sobre%20los%20productos%20fabricados%20de%20parrillas%20en%20acero%20inoxidable" rel="noopener noreferrer" target="_blank">
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href="tel://+51981325313" class="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="project-und">
              <div className="content-one">
                <div className="img_firts">
                  <img id="featuredFive"  src={coc1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailFive activeFive" src={coc1} alt=""/>
                    <img className="thumbnailFive" src={coc2} alt=""/>
                    <img className="thumbnailFive" src={coc3} alt=""/>
                    <img className="thumbnailFive" src={coc4} alt=""/>
                  </div>
                  <div className="img_arrow_right"></div>
                </div>
              </div>
              <div className="content-two">
                <div className="">
                <p>	MUEBLES DE EQUIPAMENTO GASTRONOMICO</p>
                <div>
                  <ul>
                    <li>  Cocinas industriales </li>
                    <li> Campanas extractoras</li> 
                    <li> Mesas de trabajo</li> 
                    <li>Trampas de grasa</li>  
                    <li> Lavaderos </li> 
                    <li>Coche de transporte</li>  
                    <li>Tabolas</li>  
                    <li> Repisas organizadoras</li> 
                  </ul>
                </div>
                </div>
                
                <div className="button_project">
                 <div className="">
                   <a href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank">
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                     <a href="https://api.whatsapp.com/send?phone=51981325313&text=Un%20gusto%20empresa%20Soldinoxtig%2C%20quisiera%20m%C3%A1s%20informacion%20sobre%20los%20productos%20fabricados%20de%20muebles%20de%20equipamento%20gastronomico" rel="noopener noreferrer" target="_blank">
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href="tel://+51981325313" class="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
            <div className="project-und">
              <div className="content-one">
                <div className="img_firts">
                  <img id="featuredSix"  src={pis1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailSix activeSix" src={pis1} alt=""/>
                    <img className="thumbnailSix" src={pis2} alt=""/>
                    <img className="thumbnailSix" src={pis3} alt=""/>
                    <img className="thumbnailSix" src={pis4} alt=""/>
                  </div>
                  <div className="img_arrow_right"></div>
                </div>
              </div>
              <div className="content-two">
                <div className="">
                <p>	ACCESORIOS PARA PISCINAS EN ACERO INOXIDABLE</p>
                <div>
                  <ul>
                    <li>Cascadas </li>   
                    <li>Escaleras para el ingreso de piscina</li>
                    <li> Rejillas para drenajea</li>   
                  </ul>
                </div>
                </div>
                
                <div className="button_project">
                 <div className="">
                   <a href="mailto:ventas@soldinoxtig.com"  rel="noreferrer" target="_blank">
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a >
                     <a href="https://api.whatsapp.com/send?phone=51981325313&text=Un%20gusto%20empresa%20Soldinoxtig%2C%20quisiera%20m%C3%A1s%20informacion%20sobre%20los%20productos%20fabricados%20de%20accesorios%20para%20piscinas%20en%20acero%20inoxidable" rel="noopener noreferrer" target="_blank">
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href="tel://+51981325313" class="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Projects;