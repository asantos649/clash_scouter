import React from 'react'
import ChampStatsCard from '../components/ChampStatsCard'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class ChampQueueContainer extends React.Component{

    state ={
        matchList:[],
        loading: true
    }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.encryptedAccountId !== prevProps.encryptedAccountId){
            this.setState({loading:true})
            this.fetchData()
        } else if(this.state.matchList !== prevState.matchList){
            this.setState({loading:false})
        }
    }

    fetchData = () => {
        if(this.props.encryptedAccountId){
            fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.props.encryptedAccountId}?queue=${this.props.queue}`,{
                headers:{
                    "Origin": "https://developer.riotgames.com",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Riot-Token": process.env.REACT_APP_RIOT_API,
                    "Accept-Language": "en-US,en;q=0.9",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
                }
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    matchList: data.matches
                })
            })
        }
    }

    getSortedList = () =>{
        let champCount = {}
        this.state.matchList.forEach((match) =>{
            if (champCount[match.champion]) {
                champCount[match.champion] ++
            } else {
                champCount[match.champion] = 1
            }
        })

        let champCountArray = []
        Object.keys(champCount).forEach(key => {
            champCountArray.push({champion:key, count:champCount[key]})
        }) 

        return champCountArray.sort((a,b) => {
            return b.count - a.count
        })
    }

    renderMostPlayed =() => {

        if(this.props.allChamps !== {}){
            let list = this.getSortedList().map(champ => {
                return <ChampStatsCard champion={this.props.allChamps[champ.champion]} count={champ.count} max={this.state.matchList.length}/>
            })
            return this.props.showMoreChamps ? list.slice(0,25) : list.slice(0,10)
        } else {
            return <div>Loading...</div>
        }

        
    }

    render(){
       
        return (
            this.state.loading ? 
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
            />
            : <div>
                {this.renderMostPlayed()}
            </div>
        )
    }

}

export default ChampQueueContainer