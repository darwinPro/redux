import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Releated from '../../pages/components/related'
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleComponent from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player'

class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }


    render() {

        return (
            <HandleComponent>
                <HomeLayout >
                    <Releated 
                        playlist={this.props.data.categories[0].playlist}
                        listfriends={this.props.data.listfriends}
                    />

                    <Categories
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }

                </HomeLayout>
            </HandleComponent>
        )
    }
}
export default Home;