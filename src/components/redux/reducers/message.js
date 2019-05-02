const initialState = [
    { message: 'Hi, Mark ! I made a new Design for Messenger App', date: new Date(), type: 'RECEIVED' }
]


const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return [].concat(state).concat(action.message)
        default:
            return state
    }
}

export default messageReducer