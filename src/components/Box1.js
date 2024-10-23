import img1 from "../imgs/fotoperfil.png"
import {useState} from 'react'; 
const Box1=({ showTextEnglish, changeText })=>{

    

    return(
        <div className="div-box1 row">
            <div className="col-sm-12 col-md-6 col-xl-3">
        <img src={img1} alt="fotoperfil" className="img-box1"/>
        </div>
        <button onClick={changeText}>EN</button>
        <div className="text-box1 col-sm-12 col-md-6 col-xl-9">
        <h1>{showTextEnglish ?"¡BIENVENIDO!" : "WELCOME!"}</h1>
        <h3>{showTextEnglish ? "Quien Soy?" : "Who i am?"}</h3>
        <p>{ showTextEnglish
        ?"¡Hola, soy Hernan Molina, un Frontend Developer apasionado por la creación de experiencias web cautivadoras. Mi enfoque combina diseño y desarrollo para dar vida a proyectos únicos y funcionales. Explora mi portafolio y descubre cómo transformo ideas en interfaces impactantes. ¡Gracias por visitar!"

        :"Hello, I’m Hernan Molina, a Frontend Developer passionate about creating captivating web experiences. My approach combines design and development to bring unique and functional projects to life. Explore my portfolio and discover how I transform ideas into impactful interfaces. Thank you for visiting!"}</p>
        <button>DESCARGAR CV</button>   
        <button>CONTACTAR</button>
        </div>
        </div>
    );
}

export default Box1;