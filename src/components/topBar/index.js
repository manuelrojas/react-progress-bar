import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 1em;
    width: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: ${props => props.theme.text};
    text-align: left;
    height: 2.2em;
    padding: 9px;
    box-sizing: border-box;
`

const TopBar = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default TopBar
