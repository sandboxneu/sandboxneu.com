import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"

import Values from "../components/ApplyPage/values"
import Showcase from "../components/ApplyPage/showcase"
import Position from "../components/ApplyPage/position"
import Heading from "../components/ApplyPage/heading"
import Layout from "components/layout"
import SEO from "components/seo"

const Header = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: ${SB_NAVY};
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`

const ParagraphContainer = styled.div`
  padding-bottom: 20vh;
  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
    grid-auto-columns: 1fr;
    padding-bottom: 5vh;
  }
`

const ShowcaseVideo = styled.div`
  display:
  position: relative;
  width: 100vw;
  height: 10vh;
`

const ExHeader = styled.h1`
  font-style: italic;
  color: #e8f0ff;
  font-stretch: expanded;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  font-size: 12.5em;
  margin-bottom: 0.5em;
  position: absolute;
  top: 800px;
  margin-top: 29px;
`

const ExperienceSection = styled.div`
  margin-top: 130px;
`

const ApplyPage = ({ data }) => {
  const positions = data.positions.edges.map(edge => (
    <Position {...edge.node} />
  ))
  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <Heading {...data.apply.edges[0].node} />
      <Values {...data.values.edges[0].node} />
      <Showcase />
      <Header id="open-positions">Open Positions</Header>
      <ParagraphContainer>{positions}</ParagraphContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ApplyPageQuery {
    apply: allApplyJson {
      edges {
        node {
          title
          subtitle
          applicationStatus
        }
      }
    }
    values: allMissionJson {
      edges {
        node {
          title
          principles {
            title
            body
          }
        }
      }
    }
    positions: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/apply/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            role
            description
          }
        }
      }
    }
  }
`

export default ApplyPage
