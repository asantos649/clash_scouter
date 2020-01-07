import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer'
import SummonerForm from './components/SummonerForm'

class App extends React.Component {

  state ={
    user: 'x1234567890',
    encryptedUserId: 'eGCN7CoutXsY9agxnM_h0c1pVFn00iNoH6VYZfC8Kv0lxUo'
  }

  changeSummoner= (user) => {

    fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}`,{
        headers: {
        "Origin": "https://developer.riotgames.com",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": process.env.REACT_APP_RIOT_API,
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
    }}).then(resp => resp.json())
    .then(data => {
        console.log(data)
        if (data.id){
                this.setState({
                    user: user,
                    encryptedUserId: data.id
                })
        } else (
            alert('try again')
        )
    })
  }
  render(){
    return (
      <div className="App">
        <SummonerForm submitHandler={this.changeSummoner}/>
        <h3>{this.state.user}</h3>
        <MainContainer encryptedUserId={this.state.encryptedUserId} user={this.state.user}/>
      </div>
    );

  }
}

export default App;
