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
       <div className='legalFooter'>Clash Scouter isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
    or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
    trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</div>
      </div>
    )
  }
 
}

export default App;
