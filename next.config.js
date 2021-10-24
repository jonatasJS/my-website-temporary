/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [ 'lh3.googleusercontent.com', 'lipis.github.io', 'lipis.dev' ],
    minimumCacheTTL: 60,
  }
}
