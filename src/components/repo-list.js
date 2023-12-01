import styled from 'styled-components'
import RepoItem from './repo-item'
import NoRepo from './no-repo';

const RepoListStyled = styled.div`
    grid-area: repo-list;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /*background-color: pink;*/
`

function RepoList({ repoList, search, selectedLanguage }) {
    let list = [...repoList]; 
    list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    if (search !== '') {
        list = list.filter((item) => {
            return item.name.search(search) >= 0
        })
    }
    if (selectedLanguage && selectedLanguage !== '' && selectedLanguage !== 'all') {
        list = list.filter((item) => {
            if (item.language) {
                return item.language.toUpperCase() === selectedLanguage.toUpperCase();
            }
            return false;
        })
    }

    if (list.length === 0)
    return (<NoRepo />)
    else
    return (
        <RepoListStyled>
            {list.map((item) => { 
                return <RepoItem {...item} key={item.id}/>
            })}
        </RepoListStyled>
    )
}

export default RepoList
