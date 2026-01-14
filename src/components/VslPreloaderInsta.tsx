// components/VslPreloaderInsta.tsx
'use client';

import ReactDOM from 'react-dom';

export default function VslPreloaderInsta() {
  // Pré-carrega o Player JS do vídeo da BIO DO INSTA
  // ID: 696778c43565f9f404c72e14
  
  ReactDOM.preload(
    'https://scripts.converteai.net/6386c5ef-c435-4ceb-bd05-bafd8dff4a4e/players/696778c43565f9f404c72e14/v4/player.js',
    { as: 'script' }
  );

  return null;
}