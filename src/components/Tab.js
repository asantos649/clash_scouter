import React from 'react'

class Tab extends React.Component{


    determineStyle = () => {
        if(this.props.position === this.props.currPosition){
            return(
                {
                    marginLeft:`${(this.props.position-1) * 20}%`,
                    fontWeight:'bolder',
                    color: 'black'
                }
            )
        } else if(this.props.position === this.props.currPosition-1) {
            return (
                {marginLeft:`${(this.props.position-1) * 20}%`,
                 borderRightColor: 'black'
                }
            )
        } else{
            return {marginLeft:`${(this.props.position-1) * 20}%`}
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