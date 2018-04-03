import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 3em;
    width: 4em;
    background: #000;
    z-index: 3;
    padding: 0.2em;
    color: ${props => props.theme.text};
    text-align: center;
    display: flex;
    align-items: center;
`

const Target = ({ max }) => (
  <Wrapper>
    Target ${max}
  </Wrapper>
)


Target.defaultProps = {
  theme: {
    main: '#71C9CE',
    second: '#A6E3E9',
    third: '#CBF1F5',
    shadow: '#888888'
  },
  max: 0,
}

export default Target
