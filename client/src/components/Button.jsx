function Button({text, variant="primary"}){

    const primary="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition";
    const secondary="bg-transparent text-gray-700 hover:text-blue-600 px-6 py-3 font-semibold transition";

    return(

        <button className={
            variant === "primary"
                    ? primary
                    : secondary
            }
        >
            {text}
        </button>
    );
}
export default Button;