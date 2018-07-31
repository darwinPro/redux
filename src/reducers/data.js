import schema from '../schemas/index';
import { fromJS} from 'immutable';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: '',
})

function Data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
           /* let results = [];
            if (action.payload.query) {
                state.data.categories.forEach(category => {
                    results = results.concat(
                        category.playlist.filter(
                            item => item.author.toLowerCase()
                                .includes(action.payload.query.toLowerCase())
                        )
                    )
                })
            }
            return {
                ...state,
                search: results

            }*/

            return state.set('search', action.payload.query)
        }

        default:
            return state;
    }
}

export default Data;