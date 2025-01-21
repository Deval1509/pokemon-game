import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}));
app.use(express.json());

// GET request to fetch a random Pokémon
app.get('/pokemon/random', async (req, res) => {
  try {
    // Generate a random Pokémon ID
    const randomId = Math.floor(Math.random() * 50) + 1;

    // Fetch Pokémon data from the PokeAPI
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = response.data;

    // Extract useful data
    const name = pokemon.name;
    const silhouette = pokemon.sprites.front_default;
    const fullImage = pokemon.sprites.other['official-artwork'].front_default; 

    // Generate 3 decoy names
    const decoys = [];
    while (decoys.length < 3) {
      const decoyId = Math.floor(Math.random() * 151) + 1;
      if (decoyId !== randomId) {
        const decoyResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${decoyId}`);
        const decoyName = decoyResponse.data.name;
        if (!decoys.includes(decoyName)) {
          decoys.push(decoyName);
        }
      }
    }

    // Randomize the options
    const options = [name, ...decoys].sort(() => Math.random() - 0.5);

    // Response Data
    res.json({
      id: randomId,
      silhouette,
      fullImage,
      options,
    });
  } catch (error) {
    console.error('Error fetching Pokémon:', error.message);
    res.status(500).json({ error: 'Failed to fetch Pokémon data' });
  }
});

// POST request to verify the Pokémon guess
app.post('/pokemon/verify', async (req, res) => {
  const { id, guess } = req.body;

  try {
    // Fetch Pokémon data using the ID
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;

    // Determine if the guess is correct
    const isCorrect = pokemon.name.toLowerCase() === guess.toLowerCase();

    // Respond with the result
    res.json({
      correct: isCorrect,
      name: pokemon.name,
      fullImage: pokemon.sprites.other['official-artwork'].front_default,
    });
  } catch (error) {
    console.error('Error verifying Pokémon guess:', error.message);
    res.status(500).json({ error: 'Failed to verify Pokémon guess' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
