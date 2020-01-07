import React from 'react'

function InfoWrapper (props){
    return(
        <div className='infoWrapper'>
            <h4>{props.title}</h4>
            {props.children}
        </div>

    )
}

export default InfoWrapper