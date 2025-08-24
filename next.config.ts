import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Улучшенное отслеживание изменений файлов
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Отключаем кэширование в режиме разработки
  onDemandEntries: {
    // Период времени, в течение которого страница будет храниться в буфере
    maxInactiveAge: 25 * 1000,
    // Количество страниц, которые должны быть одновременно в буфере
    pagesBufferLength: 2,
  },
};

export default nextConfig;
