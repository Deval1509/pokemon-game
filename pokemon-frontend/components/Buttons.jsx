// Buttons on the Page
import React from "react";

const Buttons = ({options, onOptionClick, isDisabled}) => {
    return(
        <div className="mt-6 grid grid-cols-2 gap-4 mx-auto w-80">
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onOptionClick(option)}
                    disabled={isDisabled}
                    className={`px-4 py-2 rounded-lg shadow-md font-medium transition duration-200 ${
                        isDisabled
                          ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                          : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500'
                      }`}
                >
                    {option}
                </button>
            ))}

        </div>
    )
}

export default Buttons;