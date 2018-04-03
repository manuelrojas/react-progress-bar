import React from 'react'
import styled from 'styled-components'
import MdInfo from 'react-icons/lib/md/info';

const Wrapper = styled.div`
    width: 4em;
    height: 7em;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.theme.text};
`

const Reached = styled.div`
  font-weight: bold;
  padding: 5px;
`

const InfoBar = ({ reached }) => (
  <Wrapper>
    <MdInfo size={30} color="aliceblue" /> You need <Reached>${reached}</Reached> more to reach your target.
  </Wrapper>
)

export default InfoBar
