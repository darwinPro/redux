import React from 'react';
import Category from '../components/category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search'
import Media from '../../playlist/components/media';


function Categories(props) {
    return (
        <div className="Categories">
            <SearchContainer />
            {
                props.search.map(item => {
                    return <Media
                        openModal={props.handleOpenModal}
                        key={item.get('id')}
                        //title={item.get('title')}
                        //cover={item.get('cover')}
                        //author={item.get('author')}
                        {...item.toJS()}

                    />
                })
            }

            {
                props.categories.map((item) => {
                    return (
                        <Category
                            key={item.get('id')}
                            {...item.toJS()}
                            handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories;