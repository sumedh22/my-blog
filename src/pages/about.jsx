import React from "react"
import { Styled, css } from "theme-ui"
import Header from 'gatsby-theme-blog/src/components/header'
import SEO from 'gatsby-theme-blog/src/components/seo'
import resume from '../../content/assets/downloads/Sumedh_Chakravorty.pdf'

export default ({ children, ...props }) => {
    return <Styled.root>
        <SEO title="About"/>
        <Header title="My Dev Blog" {...props} />
        <div
            css={css({
                maxWidth: `container`,
                mx: `auto`,
                px: 3,
                py: 2,
            })}
        >
            <Styled.h1>About Me</Styled.h1>
            <Styled.p>
            Currently working as Product Manager for Oracle VBCS, helping teams in Oracle build next generation apps. Views are my own.
            </Styled.p>
            <Styled.h2>Social</Styled.h2>
            <Styled.ul>
                <Styled.li><Styled.a target="_blank" href="https://www.linkedin.com/in/sumedh-chakravorty/">LinkedIn</Styled.a></Styled.li>
                <Styled.li><Styled.a target="_blank" href="https://medium.com/@sumedhchaccravorty/">Medium</Styled.a></Styled.li>
                <Styled.li><Styled.a target="_blank" href="https://github.com/sumedh22">GitHub</Styled.a></Styled.li>
            </Styled.ul>
            <Styled.h2>Resumé</Styled.h2>
            <Styled.a href={resume} download="Sumedh Chakravorty.pdf">
            Sumedh Chakravorty
            </Styled.a>
        </div>

    </Styled.root>
}