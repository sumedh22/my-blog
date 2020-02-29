import React from "react"
import { Styled, css } from "theme-ui"
import Header from 'gatsby-theme-blog/src/components/header'

export default ({ children, ...props }) => {
    return <Styled.root>
         <Header title="My Blog" {...props} />
        <div>
            <div
                css={css({
                    maxWidth: `container`,
                    mx: `auto`,
                    px: 3,
                    py: 2,
                })}
            ><Styled.h1>About Me</Styled.h1></div></div>
    </Styled.root>
}