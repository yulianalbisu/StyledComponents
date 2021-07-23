import React from 'react'
import {colors, setupBorder} from '../utils'
import styled from 'styled-components'
import ComplexTitle from './ComplexTitle'

export const AlternativeTitle = ({ title }) => {
    return (
    <Wrapper> 
        <h1>{title}</h1>
        <div className='underline'></div>
    </Wrapper>
    )
}
//making a line under this title

const Wrapper = styled(ComplexTitle) `
h1 {
    text-transform:capitalize;
    text-align: center;
}
.underline {
    width:5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
}
.box {
    height: 10px;
    border: ${setupBorder({width:5,type:'solid',color:'green'})}; 
}`
export default Wrapper