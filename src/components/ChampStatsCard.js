import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function ChampStatsCard(props) {



    return(
        <div className='statsCard'>
            <div>{props.champion.name}</div>
            <div className='statsCardContent'>
                <img className = 'champImage 'src={`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${props.champion.image.full}`}/>
                <div className="progressWrapper">
                    <CircularProgressbar value={props.count} maxValue={props.max} text={`${Math.round((props.count/props.max*100))}%`}/>
                </div>
            </div>
            <div>{props.count}/{props.max} games</div>
        </div>
    )
}

export default ChampStatsCard