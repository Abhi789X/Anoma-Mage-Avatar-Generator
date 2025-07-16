import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleGenerate = () => {
    if (username.trim() !== "") setSubmitted(true);
  };

  const avatarUrl = `https://avatars.dicebear.com/api/identicon/${username}.svg`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-900 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">🔮 Anoma Mage Avatar</h1>

      <input
        type="text"
        placeholder="Enter your X username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mb-4 w-full max-w-sm"
      />

      <button
        onClick={handleGenerate}
        className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-semibold transition"
      >
        Generate Mage Card
      </button>

      {submitted && (
        <div className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl max-w-sm w-full text-center">
          <img
            src={avatarUrl}
            alt="Mage Avatar"
            className="w-28 h-28 mx-auto rounded-full border-2 border-purple-500 mb-4"
          />
          <p className="text-xl font-bold">@{username}</p>
          <p className="italic text-purple-300 mt-1">"Fitcoin Alchemist"</p>
        </div>
      )}
    </div>
  );
}
