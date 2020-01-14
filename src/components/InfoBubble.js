import React from 'react'
import ReactTooltip from 'react-tooltip'

function InfoBubble (props){
    return(
        <div className='infoBubble'>
            <img data-tip data-for={props.toolTipId} className='infoIcon' src='https://img.icons8.com/small/16/000000/info.png'></img>
           <ReactTooltip delayShow={250} id={props.toolTipId} className='toolTip'>
               {props.toolTip}
           </ReactTooltip>
        </div>

    )
}

export default InfoBubble