function Button(props){
    return(
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition">
            {props.text}
        </button>
    );
}
export default Button;