
import React, { useContext, useState }  from 'react'
import AppContext from "../context/AppContext";

import './styles/project.css'
/* images */

import ModalVideoOne from '../components/ModalVideoOne'
import ModalVideoThree from '../components/ModalVideoThree'







function Projects () {
  const {state} =useContext(AppContext)
  const { products } = state;

  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(0)
  const [index3, setIndex3] = useState(0)
  const [index4, setIndex4] = useState(0)
  const [index5, setIndex5] = useState(0)
  const [index6, setIndex6] = useState(0)

  const [showModalvideo1, setShowModalvideo1] = useState(false);
  const [showModalvideo3, setShowModalvideo3] = useState(false);

  const OpenModalvideo1 = () => {
    setShowModalvideo1(true);
  };

  const CloseModalvideo1 = () => {
    setShowModalvideo1(false);
  };

  const OpenModalvideo3 = () => {
    setShowModalvideo3(true);
  };

  const CloseModalvideo3 = () => {
    setShowModalvideo3(false);
  };


  
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
                  <img id="featured"  src={products[0].images[index].img} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                  {products[0].images.map((prouct, index) => (
                    <img key={index} 
                    className="thumbnail" 
                    src={prouct.img} 
                    onClick={() => setIndex(index)}
                    alt=""/>
                    ))}
                  </div>
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
                   <a href="tel://+51981325313" className="btn_call">
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
                <img id="featured"  src={products[1].images[index2].img} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                  {products[1].images.map((prouct, index2) => (
                    <img key={index2} 
                    className="thumbnail" 
                    src={prouct.img} 
                    onClick={() => setIndex2(index2)}
                    alt=""/>
                    ))}
                     <img src="https://apiweb.netlify.app/images/soldi/product/bar4.jpg" className="thumbnail"
                  onClick={OpenModalvideo1}
                  alt=""
                  />
                 
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
                    <li>Barandas con pasamano de madera</li>   
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
                   <a href="tel://+51981325313" className="btn_call">
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
                <img id="featured"  src={products[2].images[index3].img} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                  {products[2].images.map((prouct, index3) => (
                    <img key={index3} 
                    className="thumbnail" 
                    src={prouct.img} 
                    onClick={() => setIndex3(index3)}
                    alt=""/>
                    ))}
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
                   <a href="tel://+51981325313" className="btn_call">
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
                <img id="featured"  src={products[3].images[index4].img} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                  {products[3].images.map((prouct, index4) => (
                    <img key={index4} 
                    className="thumbnail" 
                    src={prouct.img} 
                    onClick={() => setIndex4(index4)}
                    alt=""/>
                    ))}
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
                   <a href="tel://+51981325313" className="btn_call">
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
                <img id="featured"  src={products[4].images[index5].img} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                  {products[4].images.map((prouct, index5) => (
                    <img key={index5} 
                    className="thumbnail" 
                    src={prouct.img} 
                    onClick={() => setIndex5(index5)}
                    alt=""/>
                    ))}
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
                   <a href="tel://+51981325313" className="btn_call">
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
                <img id="featured"  src={products[5].images[index6].img} alt=""/>
                </div>
                <div className="slider_wrapper">
                  <div className="img_arrow_left"></div>
                  <div className="contents_img">
                  {products[5].images.map((prouct, index6) => (
                    <img key={index6} 
                    className="thumbnail" 
                    src={prouct.img} 
                    onClick={() => setIndex6(index6)}
                    alt=""/>
                    ))}
                    <img src="https://apiweb.netlify.app/images/soldi/product/postervideo32.jpg" className="thumbnail"
                  onClick={OpenModalvideo3}
                  alt=""
                  />
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
                    <li> Rejillas para drenajes</li>   
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
                   <a href="tel://+51981325313" className="btn_call">
                      <button>
                      <i className="fas fa-phone-alt"></i> Llamanos
                      </button>
                   </a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <ModalVideoOne CloseModalvideo1={CloseModalvideo1} showModalvideo1={showModalvideo1}/>
          <ModalVideoThree CloseModalvideo3={CloseModalvideo3} showModalvideo3={showModalvideo3}/>
      </div>
    </>
  )
}

export default Projects;