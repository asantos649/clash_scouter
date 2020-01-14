import React from 'react'
import InfoBubble from '../components/InfoBubble'

function InfoWrapper (props){
    return(
        <div className='infoWrapper'>
            <div>
                <div className='infoTitle'>
                    <h4>{props.title}</h4>
                    <InfoBubble toolTip={props.toolTip} toolTipId={props.toolTip}/>
                </div>
                {props.children}
            </div>
            <button className='showButton' onClick={props.showMoreClick}>{props.showMoreChamps ? '▲' : '▼'}</button>
        </div>

    )
}

export default InfoWrapper