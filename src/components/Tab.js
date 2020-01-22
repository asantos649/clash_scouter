import React from 'react'

class Tab extends React.Component{

    // state={
    //     user: 'placeholder'
    // }

    determineStyle = () => {
        if(this.props.position === this.props.currPosition){
            return(
                {
                    marginLeft:`${(this.props.position-1) * 20+1}%`,
                    fontWeight:'bolder',
                    color: 'black'
                }
            )
        } else{
            return {marginLeft:`${(this.props.position-1) * 20+1}%`}
        }
    }

    render(){
        return(
            <div onClick={()=>this.props.changeUserClick(this.props.position)} className='tab' style={this.determineStyle()}>
                {this.props.user}
            </div>
    
        )
    }
}

export default Tab