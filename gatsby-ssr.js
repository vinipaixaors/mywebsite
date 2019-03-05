/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require(`react`)

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-fonts-google"
      href="https://fonts.googleapis.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-tagmanager"
      href="https://www.googletagmanager.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-ana;ytics"
      href="https://www.google-analytics.com"
    />,
  ])
}
