import React from 'react'

function InfoWrapper (props){
    return(
        <div className='infoWrapper'>
            <div>
                <h4>{props.title}</h4>
                {props.children}
            </div>
            <button className='showButton' onClick={props.showMoreClick}>{props.showMoreChamps ? '▲' : '▼'}</button>
        </div>

    )
}

export default InfoWrapper