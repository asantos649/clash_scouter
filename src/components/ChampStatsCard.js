import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




function ChampStatsCard(props) {



    return(
        <div className='statsCard'>
            <div>{props.champion ? props.champion.name : 'New Champion'}</div>
            <div className='statsCardContent'>
                {props.champion ? <img className = 'champImage 'src={`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${props.champion.image.full}`}/> : <div style={{'height':'100px', 'alignSelf': "center"}}></div>}
                <div className="progressWrapper">
                    <CircularProgressbar 
                        value={props.count} 
                        maxValue={props.max} 
                        text={`${Math.round((props.count/props.max*100))}%`}
                        styles={{trail:{stroke:'white', transition: 'stroke-dashoffset 2s ease 2s'}}}
                    />
                </div>
            </div>
            <div>{props.count}/{props.max} games</div>
        </div>
    )
}

export default ChampStatsCard