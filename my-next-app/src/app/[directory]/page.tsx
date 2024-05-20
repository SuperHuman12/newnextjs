'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DirectoryPage() {
  const [directoryPath, setDirectoryPath] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    const envDirectoryPath = process.env.NEXT_PUBLIC_DIRECTORY_PATH || '';
    setDirectoryPath(envDirectoryPath);
  }, []);

  // Check if the pathname matches the environment variable
  if (pathname !== `/${directoryPath}`) {
    return <div>404 - Page Not Found</div>;
  }

  return (
    <div>
      <h1>Directory: {directoryPath}</h1>
      <p>This is the content for the {directoryPath} directory.</p>
    </div>
  );
}
