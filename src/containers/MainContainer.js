import React from 'react'
import ChampCard from '../components/ChampCard'
import SummonerForm from '../components/SummonerForm'
import InfoWrapper from './InfoWrapper'
import ChampMasteryContainer from './ChampMasteryContainer'
import ChampionQueueContainer from './ChampQueueContainer'

class MainContainer extends React.Component {

    state = {
        allChamps: {},
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

    render(){
        console.log('trying to render')
        return(
            <div className='mainContainer'> 
                <InfoWrapper title='Top Champion Mastery'>
                    <ChampMasteryContainer allChamps={this.state.allChamps} encryptedUserId={this.props.encryptedUserId} fetchAllChamps={this.fetchAllChamps}/>
                </InfoWrapper>
                <InfoWrapper title='Clash History' >
                    <ChampionQueueContainer queue='700' allChamps={this.state.allChamps} encryptedAccountId={this.props.encryptedAccountId}/>
                </InfoWrapper>
                <InfoWrapper title='Ranked History' >
                    <ChampionQueueContainer queue='420' allChamps={this.state.allChamps} encryptedAccountId={this.props.encryptedAccountId}/>
                </InfoWrapper>
                <InfoWrapper title='Normal History' >
                    <ChampionQueueContainer queue='400' allChamps={this.state.allChamps} encryptedAccountId={this.props.encryptedAccountId}/>
                </InfoWrapper>
                
            </div>
        )
    }

}

export default MainContainer;