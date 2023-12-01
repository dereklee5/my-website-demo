/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io", 'media-cldnry.s-nbcnews.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig
