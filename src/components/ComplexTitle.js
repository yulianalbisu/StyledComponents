import React from 'react'
import styled from 'styled-components'

export const ComplexTitle = ({ title }) => {
    return (
    <Wrapper> 
        <h1>{title}</h1>
        <div className='underline'></div>
        <div classname='box'></div>
    </Wrapper>
    )
}
//making a line under this title

const Wrapper = styled.div `
h1 {
    text-transform:capitalize;
    text-align: center;
}
.underline {
    width:5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
}
.title {
    color:blue;
}
.box {
    height: 10px;
    border: var(--mainBorder); 
}`

export default ComplexTitle