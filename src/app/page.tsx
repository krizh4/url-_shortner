'use client';

import { useState } from 'react';

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalUrl }),
    });

    const data = await response.json();
    if (response.ok) {
      setShortUrl(`${window.location.origin}/api/${data.short}`);
    } else {
      alert('Error: ' + data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter a URL"
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="p-2 ml-2 bg-blue-500 text-white rounded">
          Shorten
        </button>
      </form>
      {shortUrl && (
        <p className="mt-4">
          Shortened URL: <a href={shortUrl} className="text-blue-500">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}
