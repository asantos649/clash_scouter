import React from 'react'

class ChampClashContainer extends React.Component{

    state ={
        clashList:[]
    }

    componentDidMount(){
        this.fetchClashData()
    }

    fetchClashData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.props.encryptedAccountId}?queue=700`,{
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
                clashList: data.matches
            })
        })
    }

    getSortedList = () =>{
        let champCount = {}
        this.state.clashList.forEach((match) =>{
            if (champCount[match.champion]) {
                champCount[match.champion] ++
            } else {
                champCount[match.champion] = 1
            }
        })
        console.log('clash', champCount)

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
            return this.getSortedList().map(champ => {
                return <p>{this.props.allChamps[champ.champion].name + " " + champ.count}</p>
            })
        } else {
            return <div>Loading...</div>
        }

        
    }

    render(){
       
        return (
            this.renderMostPlayed()
        )
    }

}

export default ChampClashContainer