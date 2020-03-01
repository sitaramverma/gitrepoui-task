import React from 'react';
import './css/MainStyle.css';
import GitRepoCard from './GitRepoCard';

class GitRepoList extends React.Component {

    render(){
        return(
            <div className="main-repocontainer">
            <div className="wd100 bg-color">
                  <GitRepoCard/>
                </div>
            </div>
        )
    }
}

export default GitRepoList;
