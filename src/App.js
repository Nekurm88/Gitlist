import './App.css';

import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import Search from './components/search';
import RepoList from './components/repo-list';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users'
import { useParams } from 'react-router-dom';
import Modal from './modal';
import ThemeSwitchStyled from './components/light';


function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'nekurm88'
  }
const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })

  }, [username])
  useEffect(() => {
    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado los repos de este crack')
        return
      }
      setRepos(data)
    })
  }, [username])
   return (
      <Layout>
        <ThemeSwitchStyled/>
        <Modal isActive={modal} setModal={setModal} />
        <Profile {...user} />
        <Filters setSearch={setSearch} repoListCount={repos.length} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
        <RepoList search={search} repoList={repos} selectedLanguage={selectedLanguage} />
        <Search setModal={setModal}/>
      </Layout>
     
    )
  
   }

  

export default App;
