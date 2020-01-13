import React from 'react'
import ChampCard from '../components/ChampCard'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class ChampMasteryContainer extends React.Component{

    state={
        userChamps: [],
        loading: true
    }

    componentDidMount(){
        this.props.fetchAllChamps().then(this.fetchChampsByMastery())
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.encryptedUserId !== prevProps.encryptedUserId){
            this.setState({loading:true})
            this.fetchChampsByMastery()
        } else if(this.state.userChamps !== prevState.userChamps){
            this.setState({loading:false})
        }
    }


    fetchChampsByMastery = () => {
            fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.props.encryptedUserId}`,{
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
                    return {...champ, champion: this.props.allChamps[champ.championId]}
                })
                console.log('trying to get mastery', mappedData)
                this.setState({
                    userChamps: mappedData
                })
            })

    }



    renderChamps = () => {
        console.log('in renderChamp', this.state.userChamps)
        let list = this.state.userChamps.map(champ => {
            return <ChampCard champ={champ} key={champ.championId}/>
        })
        return this.props.showMoreChamps ? list.slice(0,25) : list.slice(0,10)
    }

    render(){
        return(
            this.state.loading ? 
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
            />: 
            <div className='champMasteryContainer'>
                {this.renderChamps()}
            </div>
        )
    }
}

export default ChampMasteryContainer