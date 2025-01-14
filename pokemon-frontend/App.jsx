import React, { useState } from 'react';
import Header from './components/Header';
import PhotoHolder from './components/PhotoHolder';
import Buttons from './components/Buttons';
import Counter from './components/Counter';
import axios from 'axios';

const App = () => {
  const [score, setScore] = useState(0);
  const [pokemon, setPokemon] = useState(null)
  const [feedback, setFeedback] = useState('');

  // Fetch any random Pokemon from Backend
  const fetchPokemon = async () => {
    try{
      const response = await axios.get('http:localhost:5000/pokemon/random')
      setPokemon(response.data)
      setFeedback('')
    } catch (error){
      console.error('Error fetching Pokemon:', error.message);
    }
  }

 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-start py-10">
      <Header />
      <PhotoHolder />
      <Buttons />
      <Counter score={score}/>
    </div>
  );
}

export default App;
