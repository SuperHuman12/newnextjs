'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiUrl, setApiUrl] = useState<string>('');

  useEffect(() => {
    setApiUrl(process.env.NEXT_PUBLIC_API_URL || '');
  }, []);

  return (
    <div>
      <h1>Next.js Environment Variables from Vercel</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}
