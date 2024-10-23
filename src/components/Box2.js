import {useState} from 'react'; 
import img1 from "../imgs/paginawebej.png"
import imgFinanzasWebJS from "../imgs/vistaprevia-finanzasjs.png"

const Box2=({ showTextEnglish})=>{
    const [showInfo, setShowInfo]=useState(false)
    const mostrarInfo=()=>{
        setShowInfo(!showInfo);

    };
    
    return(
        <div className="div-box2 row">
        <h1>PORTFOLIO</h1>

    <div className="card-project col-sm-2 col-md-4 col-xl-2">
        <img src={imgFinanzasWebJS} alt="Vista previa pagina web"/>
        <h5>Finanzas Web</h5>
        <a id="img-vistaprevia" href="https://hernanmolinadev.github.io/PF-JS-CoderHouse-HernanMolina/" target="_blank"><button>{showTextEnglish ? "Visitar":"Visit"}</button></a>
        <button onClick={mostrarInfo}>{showTextEnglish ? "Info desarrollo":"Development info"}</button>
        {showInfo && (<div className='info-project'><p>{ showTextEnglish
        ?"Para este proyecto se utilizo JS vainilla, Sass , boostrap y para el manejo de datos se uso localstorage"

        :"For this project, vanilla JS, Sass, Bootstrap were used, and LocalStorage was used for data management."}</p>
 </div>)}
        </div>
    <div className="card-project col-sm-12 col-md-4 col-xl-2">
        <img src={img1} alt="logo"/>
        <h5>Nombre</h5>
        <button>Visitar</button>
        <button>info desarrollo</button>
    </div>
    <div className="card-project col-sm-12 col-md-4 col-xl-2">
        <img src={img1} alt="logo"/>
        <h5>Nombre</h5>
        <button>Visitar</button>
        <button>info desarrollo</button>
    </div>
    <div className="card-project col-sm-12 col-md-4 col-xl-2">
        <img src={img1} alt="logo"/>
        <h5>Nombre</h5>
        <button>Visitar</button>
        <button>info desarrollo</button>
    </div>
    <div className="card-project col-sm-12 col-md-4 col-xl-2">
        <img src={img1} alt="logo"/>
        <h5>Nombre</h5>
        <button>Visitar</button>
        <button>info desarrollo</button>
    </div>
    </div>

    );
}

export default Box2;