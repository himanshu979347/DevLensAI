function Navbar(props){
    return(
        <nav>
            <h2>{props.title}</h2>
            <p>{props.version}</p>
            <h3>{props.developer}</h3>
        </nav>
    );
}
export default Navbar;