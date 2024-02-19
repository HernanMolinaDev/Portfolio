import Contact from "./Contact";

const Navbar=()=>{
    return(
        <>
        <nav className="row">
            <div className="div-navbar">
                <h1 className="col-sm-6">navbar</h1>
                <div className="col-sm-6"><Contact/></div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;