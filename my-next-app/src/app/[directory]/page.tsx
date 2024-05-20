'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DirectoryPage() {
  const [directoryPath, setDirectoryPath] = useState<string>('');
  const router = useRouter();
  const { directory } = router.query;

  useEffect(() => {
    setDirectoryPath(process.env.NEXT_PUBLIC_DIRECTORY_PATH || '');
  }, []);

  // Check if the directory path matches the environment variable
  if (directory !== directoryPath) {
    return <div>404 - Page Not Found</div>;
  }

  return (
    <div>
      <h1>Directory: {directoryPath}</h1>
      <p>This is the content for the {directoryPath} directory.</p>
    </div>
  );
}
