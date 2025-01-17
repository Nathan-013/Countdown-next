
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi)$/i, // Tipos de arquivos de vídeo
      type: 'asset/resource', // Usa o suporte interno do Webpack para lidar com assets
    });

    return config;
  },
};

export default nextConfig;