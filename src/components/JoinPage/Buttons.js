import React from "react"
import styled, { css } from "styled-components"

import { SB_NAVY } from "@colors"

const ButtonContainer = styled.div`
  margin: 2.2em auto 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 10em;

  @media (min-width: 360px) {
    flex-direction: row;
    max-width: 15em;
    font-size: 1.5em;
  }
`

const StyledButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.8em;
  font-weight: 500;
  color: ${props => (props.selected ? "#FFF" : SB_NAVY)};
  background-color: ${props => (props.selected ? SB_NAVY : props.color)};
  border: 2px solid ${SB_NAVY};
  min-width: 10em;
  padding: 12px 6px;
  transition: background-color 0.3s, color 0.3s;

  :not(:last-child) {
    border-bottom-width: 0;
  }
  @media (min-width: 360px) {
    border-bottom-width: 2px !important;
    :not(:last-child) {
      border-right-width: 0;
    }
  }

  ${props =>
    !props.selected &&
    css`
      cursor: pointer;
    `}
`

const Button = ({ name, color, selected, setSelectedRole }) => {
  const onClick = () => setSelectedRole(name)
  return (
    <StyledButton color={color} selected={selected} onClick={onClick}>
      {name}
    </StyledButton>
  )
}

const Buttons = ({ roles, selectedRole, setSelectedRole, color }) => {
  return (
    <ButtonContainer>
      {roles.map(role => {
        return (
          <Button
            key={role}
            name={role}
            selected={role === selectedRole}
            color={color}
            setSelectedRole={setSelectedRole}
          />
        )
      })}
    </ButtonContainer>
  )
}

export default Buttons
