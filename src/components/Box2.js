import img1 from "../imgs/paginawebej.png"
const Box2=()=>{
    return(
        <div className="div-box2 row">
        <h1>PORTFOLIO</h1>

    <div className="card-project col-sm-2 col-md-4 col-xl-2">
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