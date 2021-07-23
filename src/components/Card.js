import React from 'react'
import styled from 'styled-components'


export const Card = () => {
    return (
        <StyledCard>
           <img
           src='https://dl.airtable.com/.attachmentThumbnails/d86e13eec1b200e2b21282b99a9382be/6d92321b'
           alt='product'
           />
           <footer>
               <h4>product name</h4>
               <p>$15</p>
           </footer>
    
        </StyledCard>
    )
}

const StyledCard = styled.article`
width: 90vw;
max-width:300px;
background: var(--bb);
border-radius: 0.25rem;
img{
    width:100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

footer { 
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 2 rem;  
}
h4{
    text-transform: capitalize;
    color: white;
    margin-left: var(--margin);
    &::before{
        content: 'Name : ';
        color: red;
    }
}
transition: all 0.5s ease-in-out;
p:hover{
    color: white;
}
footer:hover{
    background: black;
}
transition: all 0.5s ease-in-out;
&:hover{
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
}
@media (min-width:768px){
    max-width: 600px;
}
`
export default Card