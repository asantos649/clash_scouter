import React from 'react'
import MainContainer from './MainContainer'
import SummonerForm from '../components/SummonerForm'
import Tab from "../components/Tab"


class Folder extends React.Component{
    state ={
        currentUser: {1: 'x1234567890'},
        encryptedUserId: { 1: 'eGCN7CoutXsY9agxnM_h0c1pVFn00iNoH6VYZfC8Kv0lxUo'}, 
        encryptedAccountId: { 1: 'YcJLHnmnCZZtsH3O0E0YnGSoB-ZPhh3LZvVtudJ8509zLlU'},
        showMoreChamps: false,
        currPosition: 1,
        'user1': 'x1234567890',
        "user2": 'placeholder',
        "user3": 'placeholder',
        "user4": 'placeholder',
        "user5": 'placeholder',
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
                        user: {...this.state.user, [this.state.currPosition]: user},
                        encryptedUserId: {...this.state.encryptedUserId, [this.state.currPosition]: data.id},
                        encryptedAccountId: {...this.state.encryptedAccountId, [this.state.currPosition]: data.accountId},
                        showMoreChamps: false,
                        [`user${this.state.currPosition}`]: user
                    })
            } else (
                alert('try again')
            )
        })
      }

      showMoreClick = () => {
        this.setState({
            showMoreChamps: !this.state.showMoreChamps
        })
      }

      changeUserClick = (pos) => {
          console.log('change user')
        this.setState({
            currPosition: pos
        })
      }

      render(){
        return (
          <div className="folder">
            <Tab position={1} user={this.state.user1} currPosition={this.state.currPosition} changeUserClick={this.changeUserClick}/>
            <Tab position={2} user={this.state.user2} currPosition={this.state.currPosition} changeUserClick={this.changeUserClick}/>
            <Tab position={3} user={this.state.user3} currPosition={this.state.currPosition} changeUserClick={this.changeUserClick}/>
            <Tab position={4} user={this.state.user4} currPosition={this.state.currPosition} changeUserClick={this.changeUserClick}/>
            <Tab position={5} user={this.state.user5} currPosition={this.state.currPosition} changeUserClick={this.changeUserClick}/>
            <SummonerForm submitHandler={this.changeSummoner}/>
            <h3>{this.state[`user${this.state.currPosition}`]}</h3>
            <MainContainer showMoreClick={this.showMoreClick} showMoreChamps={this.state.showMoreChamps} encryptedUserId={this.state.encryptedUserId[this.state.currPosition]} encryptedAccountId={this.state.encryptedAccountId[this.state.currPosition]} user={this.state.currentUser}/>
          </div>
        );
    
      }
}

export default Folder