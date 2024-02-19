import img1 from "../logo192.png"
import logoReact from "../imgs/logoReact.png"
import logoSass from "../imgs/logoSass.png"
import logosJS from "../imgs/logosHtmlCssJS.png"
import logoBs from "../imgs/logoBs.png"
import logoNode from "../imgs/logoNode.png"
const Box3=()=>{
    return(
        <div className="div-box3 row">
            <h1>SKILLS</h1>
            
            <img src={logoReact} alt="logo" className="col-sm-6 col-md-3 col-xl-1"/>
            <img src={logoSass} alt="logo" className="col-sm-6 col-md-3 col-xl-1"/>
            <img src={logosJS} alt="logo" className="col-sm-6 col-md-3 col-xl-1"/>
            <img src={logoBs} alt="logo"  className="col-sm-6 col-md-3 col-xl-1"/>
            <img src={logoNode} alt="logo" className="col-sm-6 col-md-3 col-xl-1"/>
            <img src={img1} alt="logo" className="col-sm-6 col-md-3 col-xl-1"/>
            <img src={img1} alt="logo" className="col-sm-6 col-md-3 col-xl-1"/>
            
        </div>
    );
}

export default Box3;