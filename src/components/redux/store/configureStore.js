import { createStore } from 'redux'
import messageReducer from '../reducers/message'

const configureStore = () => {
    const store = createStore(
        messageReducer
    )
    return store
}

export default configureStore