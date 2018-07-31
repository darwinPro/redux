import React, { Component } from 'react';
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {
    openModal=(id)=>{
        this.props.dispatch({
            type:'OPEN_MODAL',
            payload: {
                mediaId:id
            }
            
        })
    }
    render() {
        return (
            <Media
                key={this.props.data.get('id')}
                title={this.props.data.get('title')}
                cover={this.props.data.get('cover')}
                author={this.props.data.get('author')}
                openModal={this.openModal}
                id={this.props.data.get('id')}
            />
        )
    }
}

function mapStateToPros(state, props) {
    return {
        data: state.get('data').get('entities').get('media').get(props.id),
    }
}

export default connect(mapStateToPros)(MediaContainer);