import axios from 'axios';

// Base URL of your backend
const API_BASE_URL = 'http://localhost:5000';

// Fetch any random Pokémon from the backend
export const fetchRandomPokemon = async () => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/random`);
  return response.data;
};

// Verify the user's guess
export const verifyPokemonGuess = async (id, guess) => {
  const response = await axios.post(`${API_BASE_URL}/pokemon/verify`, { id, guess });
  return response.data;
};
