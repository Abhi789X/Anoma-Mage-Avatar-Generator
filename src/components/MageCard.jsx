import React from 'react';

export default function MageCard({ username, vibe }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl w-full max-w-md mx-auto text-center border border-white/20">
      <img src="/red-crystal.png" alt="Mage Logo" className="w-20 h-20 mx-auto mb-4" />
      <h2 className="text-xl font-bold">@{username}</h2>
      <p className="text-lg text-purple-300 mt-2 italic">"{vibe}"</p>
    </div>
  );
}
