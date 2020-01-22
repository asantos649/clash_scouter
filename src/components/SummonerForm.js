import React from 'react'

class SummonerForm extends React.Component {

    state ={
        summoner: ''
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.summoner)
        this.setState(
            {summoner: ''}
        )
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} className='summonerForm'>
                <input type='text' name='summoner' className='formInput' onChange={this.changeHandler} value={this.state.summoner} placeholder='Enter a Summoner Name'/>
                <input type='submit' className='formSubmit'/>
            </form>
        )
    }


}

export default SummonerForm