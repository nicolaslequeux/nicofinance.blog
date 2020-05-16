import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #18A2B8;
    text-decoration: none;
  }
  &:visisted {
    color: inherit;
  }
`

const card = ({ title, date, excerpt, slug, timeToRead, cover }) => {
  return (
    <ul className="list-unstyled pt-1 pb-1">
      <li className="media">
        <Img
          fluid={cover}
          alt="dog"
          className="mr-3 d-none d-sm-flex"
          style={{ width: "125px", height: "125px", filter: "grayscale(25%)" }}
        />
        <div className="media-body ml-2">
          <StyledLink to={slug}> 
            <h4 className="font-weight-bold mb-0">{title}</h4>
            <small className="font-italic">Publié {date}</small>
            <small className="font-italic"> &#183; Temps de lecture {timeToRead} {timeToRead > 1 ? "minutes" : "minute"}</small>
            <p>{excerpt}</p>
          </StyledLink>
        </div>
      </li> 
    </ul>
  )
}

export default card