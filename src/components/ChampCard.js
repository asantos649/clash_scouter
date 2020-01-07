import React from 'react'

function ChampCard(props) {

    function cardColor() {
        switch (props.champ.championLevel){
            case 1:
                return {backgroundColor: 'grey'}
            case 2:
                return {backgroundColor: 'lightGrey'}
            case 3:
                return {backgroundColor: 'LightGoldenRodYellow '}
            case 4:
                return {backgroundColor: 'aquamarine'}
            case 5:
                return {backgroundColor: 'pink'}
            case 6:
                return {backgroundColor: 'plum'}
            case 7:
                return {backgroundColor: 'skyBlue'}
            
        }

    }

    return(
        <div className = 'champCard' style={cardColor()}>
            <div className = 'cardHeader'>{props.champ.champion.name}</div>
            <div className = 'cardContent'>
                <img src={`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${props.champ.champion.image.full}`}/>
                <div className = 'cardInfo'>
                    {props.champ.championPoints}
                    <div className = 'cardImages'>
                        <img src={`https://raw.githubusercontent.com/RiotAPI/Riot-Games-API-Developer-Assets/master/champion-mastery-icons/mastery-${props.champ.championLevel}.png`}/>
                    </div>
                </div>
            </div>
            <div className = 'cardFooter'>Last played: {new Date(props.champ.lastPlayTime).toLocaleDateString("en-US")}</div>
        </div>
    )
}

export default ChampCard