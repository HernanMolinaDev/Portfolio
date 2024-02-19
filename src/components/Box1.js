import img1 from "../imgs/fotoperfil.png"

const Box1=()=>{
    return(
        <div className="div-box1 row">
            <div className="col-sm-12 col-md-6 col-xl-3">
        <img src={img1} alt="fotoperfil" className="img-box1"/>
        </div>
        <div className="text-box1 col-sm-12 col-md-6 col-xl-9">
        <h1>¡BIENVENIDO!</h1>
        <h3>Quien Soy?</h3>
        <p>¡Hola, soy Hernan Molina, un Frontend Developer apasionado por la creación de experiencias web cautivadoras. Mi enfoque combina diseño y desarrollo para dar vida a proyectos únicos y funcionales. Explora mi portafolio y descubre cómo transformo ideas en interfaces impactantes. ¡Gracias por visitar!</p>
        <button>DESCARGAR CV</button>   
        <button>CONTACTAR</button>
        </div>
        </div>
    );
}

export default Box1;