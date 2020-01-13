import React from 'react'
import ChampCard from '../components/ChampCard'
import SummonerForm from '../components/SummonerForm'
import InfoWrapper from './InfoWrapper'
import ChampMasteryContainer from './ChampMasteryContainer'
import ChampionQueueContainer from './ChampQueueContainer'

class MainContainer extends React.Component {

    state = {
        allChamps: {},
        showMoreChamps: false
    }

    fetchAllChamps = () => {
        return fetch(`http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json`)
        .then(resp => resp.json())
        .then(champJSON => {
            // debugger
            let mappedJSON = {}
            for(let champ in champJSON.data){
                // debugger
                mappedJSON[champJSON.data[champ].key] = champJSON.data[champ]
            }
            this.setState({
                allChamps: mappedJSON
            })
        })
    }

    showMoreClick = () => {
        console.log('clicked')
        this.setState({
            showMoreChamps: !this.state.showMoreChamps
        })
    }

    render(){
        console.log('trying to render')
        return(
            <div className='mainContainer'> 
                <InfoWrapper showMoreClick={this.showMoreClick}  showMoreChamps={this.state.showMoreChamps} title='Top Champion Mastery'>
                    <ChampMasteryContainer showMoreChamps={this.state.showMoreChamps} allChamps={this.state.allChamps} encryptedUserId={this.props.encryptedUserId} fetchAllChamps={this.fetchAllChamps}/>
                </InfoWrapper>
                <InfoWrapper showMoreClick={this.showMoreClick}  showMoreChamps={this.state.showMoreChamps} title='Clash History' >
                    <ChampionQueueContainer showMoreChamps={this.state.showMoreChamps} queue='700' allChamps={this.state.allChamps} encryptedAccountId={this.props.encryptedAccountId}/>
                </InfoWrapper>
                <InfoWrapper showMoreClick={this.showMoreClick}  showMoreChamps={this.state.showMoreChamps} title='Ranked History' >
                    <ChampionQueueContainer showMoreChamps={this.state.showMoreChamps} queue='420' allChamps={this.state.allChamps} encryptedAccountId={this.props.encryptedAccountId}/>
                </InfoWrapper>
                <InfoWrapper showMoreClick={this.showMoreClick}  showMoreChamps={this.state.showMoreChamps} title='Normal History' >
                    <ChampionQueueContainer showMoreChamps={this.state.showMoreChamps}  queue='400' allChamps={this.state.allChamps} encryptedAccountId={this.props.encryptedAccountId}/>
                </InfoWrapper>
                
            </div>
        )
    }

}

export default MainContainer;