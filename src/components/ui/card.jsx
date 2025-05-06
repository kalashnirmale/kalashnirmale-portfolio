// src/components/ui/card.jsx
import React from 'react';

export function Card({ children }) {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      {children}
    </div>
  );
}
