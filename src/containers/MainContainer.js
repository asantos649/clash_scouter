import React from 'react'
import ChampCard from '../components/ChampCard'
import SummonerForm from '../components/SummonerForm'

class MainContainer extends React.Component {

    state = {
        user: 'x1234567890',
        encryptedUserId: 'eGCN7CoutXsY9agxnM_h0c1pVFn00iNoH6VYZfC8Kv0lxUo',
        userChamps: [],
        allChamps: {}
    }

    componentDidMount(){
        fetch(`http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json`)
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
        }).then(this.fetchChampsByMastery())
    }
   
    componentDidUpdate(prevProps, prevState){
        if(this.state.user !== prevState.user){
            this.fetchChampsByMastery()
        }
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


    fetchChampsByMastery = () => {
            fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.state.encryptedUserId}`,{
                headers: {
                    "Origin": "https://developer.riotgames.com",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Riot-Token": process.env.REACT_APP_RIOT_API,
                    "Accept-Language": "en-US,en;q=0.9",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
                }
            })
            .then(resp => resp.json())
            .then(data=>{
                let mappedData = data.map(champ=>{
                    return {...champ, champion: this.state.allChamps[champ.championId]}
                })
                console.log('trying to get mastery', mappedData)
                this.setState({
                    userChamps: mappedData
                })
            })

    }

    renderChamps = () => {
        console.log('in renderChamp', this.state.userChamps)
        return this.state.userChamps.map(champ => {
            return <ChampCard champ={champ} key={champ.championId}/>
        })
    }

    render(){
        console.log('trying to render')
        return(
            <>
                <SummonerForm submitHandler={this.changeSummoner}/>
                <h3>{this.state.user}</h3>
                {this.renderChamps()}
            </>
        )
    }

}

export default MainContainer;