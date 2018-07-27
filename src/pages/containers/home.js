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
    handleOpenModal = (event) => {
        this.setState({
            modalVisible: true,
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
                    <Releated />
                    <VideoPlayer/>
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
                                <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }

                </HomeLayout>
            </HandleComponent>
        )
    }
}
export default Home;