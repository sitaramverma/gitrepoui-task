import React from 'react';
import './css/MainStyle.css';

export default class SearchBar extends React.Component{
  constructor(){
    super()
    this.state = {
      searchVal: '',
    }
  }

  SerachRepository(val){
    if(this.props.SerachRepository){
      this.props.SerachRepository(val)
    }
  }

  handleChange(event) {
    console.log(event.target.value)
   this.setState({searchVal: event.target.value})
  }
  render(){
        return(
            <div className="main-repocontainer pFix">
                <div className="repoheding"><span>Repo Search Filter</span></div>
                <div className="wd100 dFlex flex_center">
                    <input type="text" className="searhBox" id="searchVal" name="search" value={this.state.title}
                     onChange={this.handleChange.bind(this)} placeholder="Search.."/>
                    <button className="button1 btn-primary" onClick={()=>this.SerachRepository(this.state.searchVal)}>Search</button>
                </div>
                <div className="repoheding"><span>Repo Search Result</span></div>
            </div>
        )
  }
}
