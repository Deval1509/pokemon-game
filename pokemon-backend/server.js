import express from 'express';
import cors from 'cors';
import axios from 'axios'

const app = express();
const PORT = 5000;

// MiddleWare
app.use(cors({
    origin: '*', 
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
  }));app.use(express.json());

// GET request to the API
app.get('/pokemon/random' , async (req, res) => {
    try {
        // Generate any random pokemon from the range
        const randomId = Math.floor(Math.random() * 50) + 1;

        // Fetch Data

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const pokemon = response.data

        // Extract useful data
        const name = pokemon.name;
        const image = pokemon.sprites.front_default;

        // Generate 3 decoy names
        const decoys = [];
        while (decoys.length < 3) {
          const decoyId = Math.floor(Math.random() * 50) + 1;
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
            id:randomId,
            image,
            options,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to fetch Pokemon data'})
    }
})

// POST request

app.post('/pokemon/verify', async (req, res) => {
    const {id, guess} = req.body;

    try{
        // Fetch the data using the id
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = response.data;

        // Detemine if the guess is correct
        const isCorrect = pokemon.name.toLowerCase() === guess.toLowerCase();

        // Respond with result
        res.json({
            correct: isCorrect,
            name: pokemon.name,
            fullImage: pokemon.sprites.other['official-artwork'].front_default,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Faild to Verify Pokemon GUESS'})
    }
})




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
