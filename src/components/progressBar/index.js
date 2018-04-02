import React from 'react'
import styled, {ThemeProvider}  from 'styled-components'

const themeGreen = {
  main: '#71C9CE',
  second: '#A6E3E9',
  third: '#CBF1F5'
}

const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.theme.main};
  margin: 1em;
  border-radius: 10px;
  position: relative;
`

const FullBar = styled.div`
  width: 100%;
  height: 2em;
  background: ${props => props.theme.third};
  position: absolute;
  margin: 1em;
  top: 0;
  left: 0;
  z-index: 1;
`

const Progress = styled.div`
  height: 2em;
  width: 10em;
  background: ${props => props.theme.second};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`

const ProgressBar = () => (
  <ThemeProvider theme={themeGreen}>
    <Wrapper>
      <FullBar />
      <Progress />
    </Wrapper>
  </ThemeProvider>
)


ProgressBar.defaultProps = {
  theme: {
    main: 'palevioletred',
    second: 'white'
  }
}
export default ProgressBar;
