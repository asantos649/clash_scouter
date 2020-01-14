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
                <InfoWrapper 
                    showMoreClick={this.props.showMoreClick}  
                    showMoreChamps={this.props.showMoreChamps} 
                    title='Top Champion Mastery'
                    toolTipId='mastery'
                    toolTip="Top champions by mastery.  Ten champions are shown by default. Expand to see more.">

                    <ChampMasteryContainer 
                        showMoreChamps={this.props.showMoreChamps} 
                        allChamps={this.state.allChamps} 
                        encryptedUserId={this.props.encryptedUserId} 
                        fetchAllChamps={this.fetchAllChamps}
                    />
                </InfoWrapper>

                <InfoWrapper 
                    showMoreClick={this.props.showMoreClick}  
                    showMoreChamps={this.props.showMoreChamps} 
                    title='Clash History' 
                    toolTipId='clash'
                    toolTip="Top champions by games played in clash.  Ten champions are shown by default. Expand to see more.">
                        
                    <ChampionQueueContainer 
                        showMoreChamps={this.props.showMoreChamps} 
                        queue='700' allChamps={this.state.allChamps} 
                        encryptedAccountId={this.props.encryptedAccountId}
                    />
                </InfoWrapper>

                <InfoWrapper 
                    showMoreClick={this.props.showMoreClick}  
                    showMoreChamps={this.props.showMoreChamps} 
                    title='Ranked History' 
                    toolTipId='ranked'
                    toolTip="Top champions by games played in ranked solo queue (max 100 most recent games).  Ten champions are shown by default. Expand to see more.">

                    <ChampionQueueContainer 
                        showMoreChamps={this.props.showMoreChamps} 
                        queue='420' allChamps={this.state.allChamps} 
                        encryptedAccountId={this.props.encryptedAccountId}
                    />
                </InfoWrapper>
                <InfoWrapper 
                    showMoreClick={this.props.showMoreClick}  
                    showMoreChamps={this.props.showMoreChamps} 
                    title='Normal History' 
                    toolTipId='normal'
                    toolTip="Top champions by games played in normal draft queue (max 100 most recent games).  Ten champions are shown by default. Expand to see more.">

                    <ChampionQueueContainer 
                        showMoreChamps={this.props.showMoreChamps}  
                        queue='400' allChamps={this.state.allChamps} 
                        encryptedAccountId={this.props.encryptedAccountId}
                    />
                </InfoWrapper>
                
            </div>
        )
    }

}

export default MainContainer;