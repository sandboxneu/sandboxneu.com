import React, { useState } from "react"
import styled from "styled-components"

import { SB_LIGHT_BLUE, SB_NAVY, SB_ORANGE, SB_YELLOW } from "@colors"
import Buttons from "components/JoinPage/Buttons"
import JoinContent from "components/JoinPage/JoinContent"
import Layout from "components/layout"
import SEO from "components/seo"
import Section from "styles/Section"

export const ROLE_COLOR_MAPPING = {
  developer: SB_ORANGE,
  designer: SB_LIGHT_BLUE,
  devops: SB_YELLOW,
}

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
`

const Header = styled.h1`
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2.5em;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`

const Subtitle = styled.h3`
  text-align: center;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`

const JoinPage = ({ data }) => {
  const [selectedRole, setSelectedRole] = useState("developer")

  return (
    <Layout page="join">
      <SEO
        title="Home"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <BlueFontSection>
        <Header>JOIN SANDBOX</Header>
        <Subtitle>
          The Sandbox Core team is currently accepting applications for summer
          and fall.
          <br />
          Check out our open roles below.
        </Subtitle>
        <Buttons
          roles={["developer", "designer", "devops"]}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          color={ROLE_COLOR_MAPPING[selectedRole]}
        />
        <JoinContent
          role={selectedRole}
          color={ROLE_COLOR_MAPPING[selectedRole]}
        />
      </BlueFontSection>
    </Layout>
  )
}

export default JoinPage