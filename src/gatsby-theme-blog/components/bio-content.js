import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { Link } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    <Styled.a as={Link} to={"/about"}>Sumedh Chakravorty</Styled.a>
    <br/> Product Manager @Oracle, I blog about web development
    <br/> React, Oracle JET, Oracle VBCS
  </Fragment>
)
