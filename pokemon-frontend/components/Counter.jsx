// Counter for counting the correct answers

const Counter = ({score}) => {
    return (
        <div className="mt-6 text-xl text-center font-bold bg-gray-200 py-4 px-6 rounded-lg shadow-md">
            <p> Score : <span className="text-red-600">{score}</span> </p>
        </div>
    )
}

export default Counter;