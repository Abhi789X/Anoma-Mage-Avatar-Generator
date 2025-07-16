import { useState } from "react";
import MageCard from "./components/MageCard";

const vibes = [
  "Ghost Mode",
  "Intent Sorcerer",
  "Solver of Puzzles",
  "Fitcoin Alchemist",
  "X Avatar Wielder"
];

export default function App() {
  const [username, setUsername] = useState("");
  const [vibe, setVibe] = useState("");
  const [showCard, setShowCard] = useState(false);

  const generate = () => {
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    setVibe(randomVibe);
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">🔮 Anoma Mage Avatar</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your X username"
        className="p-2 rounded bg-white/10 border border-white/20 w-64 text-center mb-4"
      />
      <button
        onClick={generate}
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded shadow-md"
      >
        Generate Mage Card
      </button>

      {showCard && <div className="mt-8"><MageCard username={username} vibe={vibe} /></div>}
    </div>
  );
}
