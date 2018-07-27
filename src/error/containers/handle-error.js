import React, { Component } from 'react';
import RegularError from '../component/regular-error'

class HandleComponent extends Component {
    state={
        handleError:false,
    }
    componentDidCatch(error, info){
        //envia este error a un servicio como sentry
        this.setState({
            handleError:true,
        })
    }
    render(){
        if(this.state.handleError){
            return(
                <RegularError></RegularError>
            )
        }
        return this.props.children
    }
}

export default HandleComponent;