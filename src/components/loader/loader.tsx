import "./loader.css"
function Loader({color = "white"}) {

    return (<div className="loader" style={{color: color}}><div></div><div></div><div></div><div></div></div>)
}

export default Loader;