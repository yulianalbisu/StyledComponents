import { useState } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton } from './components/Buttons'
import { HipsterButton } from './components/Buttons'
import { ComplexTitle } from './components/ComplexTitle'
import { AlternativeTitle } from './components/AlternativeTitle'
import Card from './components/Card'
import GlobalStyles from './global-styles'
import { Button } from '@material-ui/core';



const StyledBtn = styled(Button)`
  text-transform: capitalize;
  `
const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color:'#fff',
  background: '#222',
}
const Container = styled.div`
padding: 2rem;
color: ${(props) => props.theme.color};
background: ${(props) => props.theme.background};
`
function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () =>{
    setTheme(!BaseTheme)
  }
  return (
    <ThemeProvider theme={baseTheme === true? BaseTheme:
    DarkTheme && baseTheme === false? DarkTheme: BaseTheme}>
    <div style={{ padding: '2rem'}}>
      <GlobalStyles></GlobalStyles>
      <Container>
        Hello World!
      </Container>
      <button className='btn' onClick={toggleTheme}>Toggle Me!</button>
      <Button color='primary' variant='contained'>
        Hello World
      </Button>
      <StyledBtn color='primary' variant='contained'>
        Hello World
      </StyledBtn>
      <ComplexTitle title='more complex title'>
      </ComplexTitle>
      <AlternativeTitle title='can i see it title'>
      </AlternativeTitle>
      <BasicTitle special>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
       
      <Card>Card will sit here</Card>
  </div>
  </ThemeProvider>
  )  
}


export default App;
