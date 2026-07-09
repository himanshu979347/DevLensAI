function Button(props){
    return(
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg mt-4  transition duration-300 shadow-md">
            {props.text}
        </button>
    );
}
export default Button;