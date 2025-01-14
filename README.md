Pokémon Guessing Game
Project Overview:
The Pokémon Guessing Game is a full-stack web application that challenges users to identify Pokémon based on their silhouettes. Built with React.js and Node.js, the application integrates with the PokéAPI to fetch dynamic Pokémon data. The game includes features such as multiple-choice options, score tracking, and a countdown timer to add excitement. It is designed to be responsive, providing an engaging experience on both mobile and desktop screens.

Features:

Random Pokémon Display: Fetch and display a Pokémon silhouette along with multiple-choice options.
Verify Guesses: Check if the user’s guess is correct and provide instant feedback.
Score Tracking: Keep track of the user’s score throughout the game.
Countdown Timer: Add urgency with a timer for each round.
Responsive Design: Optimized for mobile and desktop devices.
Backend API: Node.js backend with Express.js for fetching and verifying Pokémon data.
Technologies Used:

Frontend:

React.js
TailwindCSS
Axios (for API calls)
React Router

Backend:

Node.js
Express.js (for API routing)
Axios

Getting Started:


Prerequisites:
Before you begin, ensure you have the following installed:

Node.js
npm
git (Optional)

Setup Instructions:

Clone the Repository:
git clone https://github.com/Deval1509/pokemon-guessing-game.git
cd pokemon-guessing-game

Install Dependencies:

Backend:
cd backend
npm install

Frontend:
cd ../frontend
npm install

Running the Project:

Backend:

Navigate to the backend directory:
cd backend
Start the backend server:
npm start
The backend will run on http://localhost:5000
Frontend:

Navigate to the frontend directory:
cd ../frontend
Start the frontend development server:
npm start
The frontend will run on http://localhost:3000
Project Structure:

pokemon-guessing-game/

backend/
server.js (Backend server logic)
package.json (Backend dependencies and scripts)
frontend/
src/
components/ (React components like Header, PhotoHolder, etc.)
App.jsx (Main React app)
index.css (TailwindCSS styles)
index.js (React entry point)
package.json (Frontend dependencies and scripts)
README.md (Project documentation)
.gitignore (Git ignore rules)