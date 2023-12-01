import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'

const FiltersStyled = styled.div`
    grid-area: filters;
    .count {
        font: var(--headline2-semi-bold);
        color: var(--white);
        margin-block-end: 1.5rem;
    }
    .action-list {
        display: flex;
        gap: 1rem;
    }
    .select-list {
        display: flex;
        gap: .5rem;
    }
    .filter-title{
        background: #212730;  
    }
    @media screen and (max-width: 768px){
        .action-list{
            flex-direction: column;
            max-inline-size: 100vw;
        }
        .select-list{
            margin-block-end: 2.5rem;
            block-size: 2.5rem;

        }
    }
    @media screen and (max-width: 480px){
        .select-list select{
            max-inline-size: 140px;
        }
    }
    
`

function Filters( {repoListCount, setSearch, selectedLanguage, setSelectedLanguage}) {
    function handleChange (event) {
        setSearch(event.target.value)
    }

    const changeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
      }
      
    return (
        <FiltersStyled>
           <h2 className='count'>
            repositorios {repoListCount}
           </h2>
           <div className='action-list'>
            <InputText
            type='search'
            placeholder='Busca un repositorio'
            onChange={handleChange}
            />
            <div className="select-list">
            <Selector defaultValue="Type">
             <optgroup className='filter-title' label="Select Type">
              <option value="" disabled hidden>Type</option>
              <option value="all">All</option>
              <option value="sources">Sources</option>
              <option value="forks">Forks</option>
              <option value="archive">Archive</option>
              <option value="mirrors">Mirrors</option>
              </optgroup>
            </Selector>
            <Selector changeSelection={changeLanguage} defaultValue={selectedLanguage}>
             <optgroup className="filter-title" label="Select Language">
              <option value="" disabled hidden>Language</option>
              <option value="all">All</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
            </optgroup>
          </Selector>
          <Selector defaultValue="Sort">
            <optgroup className='filter-title' label="Select Order">
             <option value="" disabled hidden>Sort</option>
             <option value="last-updated">Last updated</option>
             <option value="name">Name</option>
             <option value="stars">Stars</option>
            </optgroup>
           </Selector>
            </div>
           </div>
           <Separator />
        </FiltersStyled>
    )
}

export default Filters
