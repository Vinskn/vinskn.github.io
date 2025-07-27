/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            }
        ]
    }
}

// export default nextConfig;
