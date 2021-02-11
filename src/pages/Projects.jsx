
import React from 'react'

import './styles/project.css'
/* images */

import pro1 from '../images/pro1.jpg'
import pro2 from '../images/pro2.jpg'


function Projects () {

 
  let thumbnails = document.getElementsByClassName('thumbnail');
  let thumbnailsTwo = document.getElementsByClassName('thumbnailTwo');

  let activeImages = document.getElementsByClassName('active');
  let activeImagesTwo = document.getElementsByClassName('activeTwo');

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
                  <img id="featured"  src={pro1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnail active" src={pro1} alt=""/>
                    <img className="thumbnail" src={pro2} alt=""/>
                    <img className="thumbnail" src={pro1} alt=""/>
                    <img className="thumbnail" src={pro2} alt=""/>
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
                   <a href>
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href>
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href>
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
                  <img id="featuredTwo"  src={pro1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailTwo activeTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
                    <img className="thumbnailTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
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
                   <a href>
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href>
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href>
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
                  <img id="featuredTwo"  src={pro1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailTwo activeTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
                    <img className="thumbnailTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
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
                   <a href>
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href>
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href>
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
                  <img id="featuredTwo"  src={pro1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailTwo activeTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
                    <img className="thumbnailTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
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
                   <a href>
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href>
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href>
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
                  <img id="featuredTwo"  src={pro1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailTwo activeTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
                    <img className="thumbnailTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
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
                   <a href>
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href>
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href>
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
                  <img id="featuredTwo"  src={pro1} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                    <img className="thumbnailTwo activeTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
                    <img className="thumbnailTwo" src={pro1} alt=""/>
                    <img className="thumbnailTwo" src={pro2} alt=""/>
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
                   <a href>
                     <button>
                     <i className="far fa-envelope"></i> Cotizar
                     </button>
                     </a>
                   <a href>
                      <button>
                      <i className="fab fa-whatsapp"></i> Escribenos
                      </button>
                   </a>
                   <a href>
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