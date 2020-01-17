import React from 'react';
import logo from './logo.svg';
import './App.css';
import Folder from './containers/Folder'
import Header from './containers/Header'

class App extends React.Component {

  render(){
    return(
      <div>

        <Header />
        <Folder />
      </div>
    )
  }
 
}

export default App;
