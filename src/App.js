import './App.css';

import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import Search from './components/search';
import RepoList from './components/repo-list';
import repoData from './components/repo-data';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users'

//const repoList = [{
//  name: 'mi primer proyecto con react',
//  id: 123,},
//  {name: 'mi segrundo proyecto con react',
//  id: 124,
//}
//]

function App() {
const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  useEffect(() => {
    getUser('nekurm88').then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })

  }, [])
  useEffect(() => {
    getRepos('nekurm88').then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado los repos de este crack')
        return
      }
      setRepos(data)
    })
  }, [])
   return (
      <Layout>
        <Profile {...user} />
        <Filters></Filters>
        <RepoList repoList={repos} />
        <Search></Search>
      </Layout>
     
    )
  
   }

  

export default App;
