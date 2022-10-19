/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com","cdn4.iconfinder.com",
    "styled-components.com",
    "pics.freeicons.io","cdn.icon-icons.com","img.icons8.com"]

},
}

module.exports = nextConfig
  



