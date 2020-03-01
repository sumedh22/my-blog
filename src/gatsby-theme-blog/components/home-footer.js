import React from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a target="_blank" href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    {` , Hosted with ❤️ on `}
    <Styled.a target="_blank" href="https://www.netlify.com">Netlify</Styled.a>
  </footer>
)
export default Footer
