import React from "react"
import styled from "styled-components"

import SquareLogo from "components/squareLogo"
import { capitalize } from "utils/string"

const Wrapper = styled.div`
  border-left: 6px solid ${props => props.color};
  transition: border-left 0.3s;
  padding-left: 1em;
  @media (min-width: 1000px) {
    padding-left: 1.5em;
    margin: 4em 8em;
  }
`

const ContentHeaderWrapper = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 1.8em;
  margin-bottom: 0;
`

const HeaderText = styled.div`
  font-weight: 500;
`

const ContentBody = styled.div`
  line-height: 1.3em;
  font-size: 1.2em;
  @media (min-width: 600px) {
    font-size: 1.3em;
  }
`

const QualitiesHeader = styled.h2`
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: 2em;
  max-width: 500px;
  margin: auto;
`

const QualitiesWrapper = styled.ul`
  margin: 2em auto;
  max-width: 450px;
  font-size: 1.2em;
  line-height: 1.5em;
`

const Quality = styled.li`
  &:before {
    display: none;
  }
`

const ContentHeader = ({ color, roleName }) => {
  return (
    <ContentHeaderWrapper color={color}>
      <HeaderText color={color}>{capitalize(roleName)}</HeaderText>
      <SquareLogo size={"2em"} color={color} />
    </ContentHeaderWrapper>
  )
}

const QualitiesList = ({ qualities }) => {
  return (
    <QualitiesWrapper>
      {qualities.map(quality => {
        return <Quality key={quality}>{quality}</Quality>
      })}
    </QualitiesWrapper>
  )
}

const JoinContent = ({ color, role, description, qualities }) => {
  return (
    <>
      <Wrapper color={color}>
        <ContentHeader color={color} roleName={role} />
        <ContentBody dangerouslySetInnerHTML={{ __html: description }} />
      </Wrapper>
      <QualitiesHeader>Our Ideal Candidate</QualitiesHeader>
      <QualitiesList qualities={qualities} />
    </>
  )
}

export default JoinContent
