import styled from 'styled-components'

export const DefaultButton = styled.button `
  background-color:cyan;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
  `
export const HipsterButton = styled(DefaultButton)`
  widht: 400px;
  background-color: transparent;
  color: #645cff;
  border: 1px solid #645cff;`