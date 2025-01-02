/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "s3-us-west-2.amazonaws.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },
  output: "export",
};

export default nextConfig;
