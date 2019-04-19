import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../styles/Section"
import Header from "../styles/Header"
import Img from "gatsby-image"

// Probably a better name
const ContainerContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  flex: 3;
  padding-right: 40px;
`

const HeaderLine = styled(Header)`
  position: relative;
  text-align: ${props => props.align};
  & span {
      background-color: white;
      padding-${props => (props.align === "left" ? "right" : "left")}: 20px;
  }
  & :after{
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 22px;
    border-top: 2px solid #FCBC80;
    z-index: -1;
  }
`

const Body = styled.div`
  font-size: 20px;
  line-height: 1.5;
`

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.25);
  }
`

const Who = ({ img1, img2, img3, title1, p1, title2, p2 }) => {
  return (
    <Section>
      <ContainerContainer>
        <TextContainer>
          <HeaderLine align="left">
            <span>{title1}</span>
          </HeaderLine>
          <Body>{p1}</Body>
          <br />
          <HeaderLine align="right">
            <span>{title2}</span>
          </HeaderLine>
          <Body>{p2}</Body>
        </TextContainer>
        <ImageContainer>
          <Img fluid={img1.childImageSharp.fluid} />
          <Img fluid={img2.childImageSharp.fluid} />
          <Img fluid={img3.childImageSharp.fluid} />
        </ImageContainer>
      </ContainerContainer>
    </Section>
  )
}

Who.propTypes = {
  img1: PropTypes.object.isRequired,
  img2: PropTypes.object.isRequired,
  img3: PropTypes.object.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
}

export default Who
