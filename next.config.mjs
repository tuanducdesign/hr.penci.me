import nextra from 'nextra'
import withPWA from 'next-pwa'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

export default withNextra(withPWA({
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: "/start",
        destination: "/fe",
        statusCode: 301,
      },
    ];
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable:process.env.NODE_ENV === 'development'
  },
}))
