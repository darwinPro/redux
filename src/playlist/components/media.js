import React, { Component , PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {

    state={
        author:this.props.author
    }

    handleClick=()=>{
        this.props.openModal(this.props);
    }

    render() {
        const styles = {
            container: {
                color: '#313131',
                cursor: 'pointer',
                width: 260,
                border: 'solid 1px #345678'
            }
        }
        return (
            //<div  style={styles.container}>
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        );
    }
}


Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}

export default Media;