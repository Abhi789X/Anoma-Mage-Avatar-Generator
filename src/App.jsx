import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (username.trim() !== '') {
      setGenerated(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">🔮 Anoma Mage Avatar</h1>

      <input
        type="text"
        placeholder="Enter X username (e.g. soltrick)"
        className="px-4 py-2 rounded-md text-black w-full max-w-md mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-md mb-10"
        onClick={handleGenerate}
      >
        Generate Mage Card
      </button>

      {generated && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center w-full max-w-sm shadow-xl">
          <img
            src={`https://unavatar.io/twitter/${username}`}
            alt="X Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-600"
          />
          <h2 className="text-xl font-semibold">@{username}</h2>
          <p className="italic text-purple-300 mt-1">"Fitcoin Alchemist"</p>
        </div>
      )}
    </div>
  );
}

export default App;
