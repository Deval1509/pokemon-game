// Counter for counting the correct answers

const Counter = ({score, resetScore}) => {
    return (
        <div className="mt-6 text-xl text-center font-bold bg-gray-200 py-4 px-6 rounded-lg shadow-md">
            <p> 
                Score : <span className="text-red-600">{score}</span>
            </p>
            <button
                onClick={resetScore}
                className="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200">
                Reset
            </button>
        </div>
    )
}

export default Counter;