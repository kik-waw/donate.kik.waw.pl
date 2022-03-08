/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false
      },
    ]
  },
}
