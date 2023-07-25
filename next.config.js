/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.divanice.com',
          port: '3011',
  
        },
      ],
        domains :  ['api.divanice.com'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp'],
  
  
    },
    transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}'
      },
      '@material-ui/core/': {
        transform: '@material-ui/core/{{member}}'
      },
      '@material-ui/lab/': {
        transform: '@material-ui/lab/{{member}}'
      },
      '@material-ui/icons/?(((\\w*)?/?)*)': {
        transform: '@material-ui/icons/{{ matches.[1] }}/{{member}}'
      }
    },
  
  }
  
  module.exports = nextConfig
  
  