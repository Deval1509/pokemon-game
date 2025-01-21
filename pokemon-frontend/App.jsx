import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PhotoHolder from './components/PhotoHolder';
import Buttons from './components/Buttons';
import Counter from './components/Counter';
import { fetchRandomPokemon, verifyPokemonGuess } from './api';

const App = () => {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? JSON.parse(savedScore) : 0;
  });
  const [pokemon, setPokemon] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [gameState, setGameState] = useState('start');
  const [isGuessSubmitted, setIsGuessSubmitted] = useState(false);

  // Fetches a random Pokémon from the API and updates the state.
  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const data = await fetchRandomPokemon();
      setPokemon(data);
      setFeedback('');
      setFeedbackType('');
      setGameState('start');
    } catch (error) {
      console.error('Error fetching Pokémon:', error.message);
      setFeedbackType('failure');
    } finally {
      setLoading(false);
    }
  };

  // Handles the guess submission and verifies it against the Pokémon ID
  const handleGuess = async (guess) => {
    if (!pokemon || isGuessSubmitted) return;

    setShowSpinner(true);
    setIsGuessSubmitted(true);

    setTimeout(async () => {
      try {
        const result = await verifyPokemonGuess(pokemon.id, guess);
        setFeedback(result.correct ? 'You Got It! 🎉' : `Wrong! It was ${result.name}`);
        setFeedbackType(result.correct ? 'success' : 'failure');

        if (result.correct) {
          const newScore = score + 1;
          setScore(newScore);
          localStorage.setItem('score', JSON.stringify(newScore));
        }

        setShowSpinner(false); 
        setGameState('result');

        setTimeout(() => {
          setFeedback('');
          fetchPokemon();
          setIsGuessSubmitted(false);
        }, 3000); 
      } catch (error) {
        console.error('Error verifying Pokémon guess:', error.message);
        setFeedback('Failed to verify. Please try again.');
        setFeedbackType('failure');
        setShowSpinner(false);
      }
    }, 1000); 
  };

  const handleStart = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setGameState('playing');
    }, 500);
  };

  // Resets the game score to zero and updates local storage
  const resetScore = () => {
    setScore(0);
    localStorage.setItem('score', JSON.stringify(0));
    setFeedback('Score has been reset.');
    setTimeout(() => {
      setFeedback('');
    }, 1000);
  };

  // Initializes the Pokémon fetch operation when the component mounts
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Render the component with its child components 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-start py-10">
      <Header />
      <Counter score={score} resetScore={resetScore} />
      {loading ? (
        <p className="mt-4 text-xl text-center">Loading...</p>
      ) : (
        pokemon && (
          <>
            <PhotoHolder
              silhouette={pokemon.silhouette}
              fullImage={pokemon.fullImage}
              showImage={gameState === 'result'}
              showSpinner={showSpinner}
              gameState={gameState}
              onStart={handleStart}
            />
            {gameState === 'playing' && (
              <Buttons options={pokemon.options} onOptionClick={handleGuess}
              isDisabled={isGuessSubmitted}  />
            )}
          </>
        )
      )}
      <div className="mt-4 text-center">
        {feedback && (
          <p
            className={`text-lg font-medium ${
              feedbackType === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
