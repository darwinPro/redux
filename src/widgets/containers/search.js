import React, { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component {
    state={
        value:'Darwin Alvarez'
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value+"Submit");
    }
    setInputRef = element => {
        this.input=element;
    }
    handleInputChangue=event=>{
        this.setState({
            value:event.target.value.replace(' ','-')
        })
    }
    render() {
        return (
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChangue={this.handleInputChangue}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;