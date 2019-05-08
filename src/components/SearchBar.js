import React from 'react';
import './css/MainStyle.css';
import axios from 'axios';

export default class SearchBar extends React.Component{
  constructor(){
    super()
    this.state = {
      searchVal: '',
    }
  }

  SerachRepository(){
    if(this.props.SerachRepository){
      this.props.SerachRepository()
    }
  }

  handleChange(event) {
   this.setState({searchVal: event.target.value})
  }
    render(){
        return(
            <div className="main-repocontainer pFix">
                <div className="repoheding"><span>Repo Search Filter</span></div>
                <div className="wd100 dFlex flex_center">
                    <input type="text" className="searhBox" id="searchVal" name="search" value={this.state.title}
                     onChange={this.handleChange.bind(this)} placeholder="Search.."/>
                    <button className="button1 btn-primary" onClick={(e)=>this.props.SerachRepository(this.state.searchVal)}>Search</button>
                </div>
                <div className="repoheding"><span>Repo Search Result</span></div>
            </div>
        )
    }
}
