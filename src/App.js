import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton } from './components/Buttons'
import { HipsterButton } from './components/Buttons'
import { ComplexTitle } from './components/ComplexTitle'
import { AlternativeTitle } from './components/AlternativeTitle'
import Card from './components/Card'
import { Button } from '@material-ui/core';


const StyledBtn = styled(Button)`
  text-transform: capitalize;
  `

function App() {
  return (
    <div style={{ padding: '2rem'}}>
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
  )  
}


export default App;
