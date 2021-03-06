import React from 'react'
import InfoBubble from '../components/InfoBubble'

function InfoWrapper (props){
    return(
        <div className='infoWrapper' style={props.isFirst ? {"maxWidth":"240px"}:null}>
            <div>
                <div className='infoTitle' >
                    <h4>{props.title}</h4>
                    <InfoBubble toolTip={props.toolTip} toolTipId={props.toolTip}/>
                </div>
                {props.children}
            </div>
            
        </div>

    )
}

export default InfoWrapper