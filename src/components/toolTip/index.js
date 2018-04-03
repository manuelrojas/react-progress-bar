import React from 'react'
import styled, {keyframes}  from 'styled-components'
import MdArrowUp from 'react-icons/lib/md/keyboard-arrow-up';

const move = () => {
  return keyframes`
    0% {
      left: 0;
    }
    100% {
      left: ${props => props.current || '5'}%;
    }
  `
}

const Wrapper = styled.div`
    height: 3em;
    width: 7%;
    position: absolute;
    top: 80%;
    left: ${props => props.current}%;
    animation: 1s ${move} ease-out;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${props => props.theme.text};
`

const upIcon = {
  'display': 'flex',
  'align-self': 'center'
}

const ToolTip = ({current }) => {
  const offset = 3;
  const position = current - offset;
  return (<Wrapper current={position}>
    <MdArrowUp size={30} color="aliceblue" style={upIcon} />
    ${current}
  </Wrapper>)
}


export default ToolTip
