import styled from 'styled-components'

const NoRepoStyled = styled.div`
& {
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;

}
`

function NoRepo() {
    return (
        <NoRepoStyled>
            No hay repositorios crack
        </NoRepoStyled>
    )
}

export default NoRepo
