/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
        protocol: 'https',
        hostname: "**",
        // hostname: "cdn.dummyjson.com",
        // port: '',
        // pathname: '/account123/**',
      },
        ]
      
    }
};

export default nextConfig;
