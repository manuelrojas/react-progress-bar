import React from 'react'
import styled, {ThemeProvider, keyframes}  from 'styled-components'
import themeGreen from '../theme.js'

import Target from '../target'
import TopBar from '../topBar'
import InfoBar from '../infoBar'
import ToolTip from '../toolTip'

const animatedGrow = ()=> {
  return keyframes`
    0% {
      width: 0;
    }
    100% {
      width: ${props => props.percent || '5'}%;
    }
  `
}

const Wrapper = styled.section`
  height: 8em;
  padding: 3em 2em;
  background: ${props => props.theme.main};
  margin: 2em;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Label = styled.span`
  color: #FFF;
`

const FullBar = styled.div`
  width: 65%;
  height: 2em;
  background: ${props => props.theme.third};
  position: absolute;
  top:26%;
  left: 120px;
  z-index: 1;
  box-shadow: inset 0px 1px 2px ${props => props.theme.shadow};
`

const Progress = styled.div`
  height: 2em;
  width: ${props => props.percent}%;
  background: ${props => props.theme.second};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  animation: 1s ${animatedGrow} ease-out;
`

const ProgressBar = () => {

  const current = 56;
  const max = 125;
  const reached = max - current;
  return (<ThemeProvider theme={themeGreen}>
    <Wrapper>
      <TopBar>Your Progress</TopBar>
      <Label>Reached:</Label>
      <FullBar>
        <Progress percent={current} />
        <ToolTip current={current} />
      </FullBar>
      <Target max={max} />
      <InfoBar reached={reached} />

    </Wrapper>
  </ThemeProvider>)
}

ThemeProvider.defaultProps = {
  theme: {
    main: '#71C9CE',
    second: '#82AFB3',
    third: '#CBF1F5',
    shadow: '#888888'
  }
}
export default ProgressBar;
