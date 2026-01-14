// components/VslPreloader.tsx
'use client';

import ReactDOM from 'react-dom';

export default function VslPreloader() {
  // Pré-carrega os recursos críticos do VTurb para o vídeo de PÚBLICO FRIO
  // IDs extraídos do seu contexto anterior:
  // Player: 6967733435a1be1be44d18e8
  // M3U8: 69677237fc0e7a38b23bd30f

  ReactDOM.preload(
    'https://scripts.converteai.net/6386c5ef-c435-4ceb-bd05-bafd8dff4a4e/players/6967733435a1be1be44d18e8/v4/player.js',
    { as: 'script' }
  );

  ReactDOM.preload(
    'https://cdn.converteai.net/6386c5ef-c435-4ceb-bd05-bafd8dff4a4e/69677237fc0e7a38b23bd30f/main.m3u8',
    { as: 'fetch', crossOrigin: 'anonymous' }
  );

  return null; // Este componente não renderiza nada visual, apenas injeta performance
}