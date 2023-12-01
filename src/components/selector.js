import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: none;
    background: var(--buttonBG);
    color: var(--white);
    padding-inline: 1rem;
`

function Selector({children, changeSelection, defaultValue}) {
    return (
        <SelectorStyled onChange={changeSelection} defaultValue={defaultValue}>
            {children}
        </SelectorStyled>
    )
}

export default Selector
