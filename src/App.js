import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './MainContent/Header';
import Body from './MainContent/Body/Body';
import Toolbar from './MainContent/Toolbar/Toolbar';
import SideDrawer from './MainContent/SideDrawer/SideDrawer';
import BackDrop from './MainContent/BackDrop/BackDrop';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sideDrawerOpen : false
    }
  }

  drawerToggleClickHanler = (params) => {
    this.setState((prevState)=>{
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    })
  };
  
  backDropHandler = () => {
    this.setState({
      sideDrawerOpen : false
    })
  }
  
  render() {
    let sideDrawer;
    let backdrop ;
    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop closeDrawer={this.backDropHandler}/>;
    }
    return (
      <div className="App"  style={{height : '100%'}}>
      <Toolbar drawerClickHanler={this.drawerToggleClickHanler}/>
      <SideDrawer show={this.state.sideDrawerOpen} closeDrawer={this.backDropHandler}/>
      {backdrop}
      {/* <Header/> */}
      <main style={{marginTop : "64px"}}>
        <Body />
      </main>

    </div>
    )
  }
}

export default App

