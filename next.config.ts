import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    experimental: {
        viewTransition: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cards.scryfall.io',
            },
            {
                protocol: 'https',
                hostname: 'api.scryfall.com',
            },
        ],
    },
};

export default nextConfig;
