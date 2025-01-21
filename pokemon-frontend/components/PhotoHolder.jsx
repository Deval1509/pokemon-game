// Photoholder to display the pokemon sillhouette and immage

import React from 'react';
import './PhotoHolder.css';

const PhotoHolder = ({ silhouette, fullImage, showSpinner, gameState, onStart }) => {
  return (
    <div className="mt-10 w-80 h-80 bg-gray-100 border-4 border-yellow-400 rounded-lg shadow-md flex items-center justify-center mx-auto relative">

      {!showSpinner && gameState === 'start' && (
        <button
          onClick={onStart}
          className="absolute bottom-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Start
        </button>
      )}


      {showSpinner && (
        <div className="flex flex-col items-center">
          <div className="spinner"></div> 
        </div>
      )}

      {!showSpinner && gameState === 'playing' && (
        <img
          src={silhouette}
          alt="Pokemon silhouette"
          className="w-full h-full object-contain filter-silhouette"
        />
      )}

      {!showSpinner && gameState === 'result' && (
        <img src={fullImage} alt="Pokemon full image" className="w-full h-full object-contain" />
      )}
    </div>
  );
};

export default PhotoHolder;
