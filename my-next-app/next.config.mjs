/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_DIRECTORY_PATH: process.env.NEXT_PUBLIC_DIRECTORY_PATH,
    },
  };
  
  export default nextConfig;
  