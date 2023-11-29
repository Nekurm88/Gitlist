import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
background: var(--buttonBG);
padding-block: .25rem;
font: var(--button);
color: var(--white);
border: 1px solid var(--grey);
min-inline-size: 135px;
gap: .5rem;
display: inline-flex;
align-items: center;
cursor: pointer;
text-decoration: none !important;
justify-content: center;
border-radius: .5rem;
&:hover{
    background: var(--white);
    color: var(--button);
    text-decoration: none;
}
`

function Button( {text,  link, className, icon } ) {
   const component = link ? 'a' : 'button'
   let IconComponent = null
   if (icon) {
    if (isValidElement(icon )) {
        IconComponent = icon
    }
   }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button
