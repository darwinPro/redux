import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Releated from '../../pages/components/related'
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleComponent from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player'
import { connect } from 'react-redux';
import {List as list} from 'immutable';

class Home extends Component {
    handleOpenModal = (id) => {
        this.props.dispatch({
            type:'OPEN_MODAL',
            payload:{
                mediaId: id
            }
        })
    }
    handleCloseModal = (event) => {
        this.props.dispatch({
            type:'CLOSE_MODAL'
        })
    }


    render() {

        return (
            <HandleComponent>
                <HomeLayout >
                    <Releated
                        //playlist={this.props.playlist}
                        //listfriends={this.props.listfriends}
                    />

                    <Categories
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoplay
                                    id={this.props.modal.get('mediaId')}
                                />
                            </Modal>
                        </ModalContainer>
                    }

                </HomeLayout>
            </HandleComponent>
        )
    }
}

function mapStateToProps(state, props) {
    const categories=state.get('data').get('categories').map(categoryId=>{
        return state.get('data').get('entities').get('categories').get(categoryId)
    })
    let searchResults= list();
    const search=state.get('data').get('search');
    if(search){
        const mediaList = state.get('data').get('entities').get('media');
        searchResults= mediaList.filter( (item)=>(
           item.get('author').toLowerCase().includes(search.toLowerCase())
        )).toList();
    }
    return {
        categories: categories,
       // listfriends: state.data.listfriends,
        search: searchResults,
        modal: state.get('modal')
    }
}

export default connect(mapStateToProps)(Home);