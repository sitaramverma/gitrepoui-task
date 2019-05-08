import React from 'react';
import './css/MainStyle.css';
import icon1 from '../../src/icon1.png';
import icon2 from '../../src/icon2.png';
import icon3 from '../../src/icon3.png';
import SearchBar from './SearchBar';
import axios from 'axios';


export default class GitRepoCard extends React.Component{
    constructor() {
        super()
        this.state = {
            repoListDtls: [],
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/search/repositories?q=TEST`)
          .then(res => {
            const repoListDtls = res.data.items;
            this.setState({ repoListDtls });
        }).catch(err => {
            console.log(err)
        })
    }

      SerachRepository(searchTxt){
          axios.get(`https://api.github.com/search/repositories?q=TEST`)
          .then(res => {
            const repoListDtls = res.data.items.filter((val) => {
                return val.full_name == ((searchTxt == undefined || searchTxt == '') ?  'pytest-dev/pytest' : searchTxt);
            });
            this.setState({ repoListDtls });
        }).catch(err => {
          console.log(err)
        })
      }

     renderDt(){
        return <div className="main-card-conatiner dFlex ptop170">
        {
            this.state.repoListDtls.map(mapDtls =>
                <div className="main_div"  key={mapDtls.id}>
                <div className="mn-suggester-card">
                    <div className="mn-suggester-card_info-wrapper">
                    <a className="mn-suggester-card__image-link">
                        <img src={mapDtls.owner.avatar_url} alt="logo" className="imgBox"></img>
                    </a>
                    <span>{mapDtls.full_name}</span>
                    <span>Repo Icon</span>
                    <div>
                        <img src={icon1} className="gitIconSize"></img>
                        <img src={icon2} className="gitIconSize"></img>
                        <img src={icon3} className="gitIconSize"></img>
                    </div>
                    </div>
                    <button className="button button1">View Profile</button>
               </div>
               </div>
            )
        }
        </div>
    }

    render(){
        return(
          <React.Fragment>
            <SearchBar  SerachRepository={()=>this.SerachRepository()}/>
           <div>{this.renderDt()}</div>
          </React.Fragment>
        )
    }
}
