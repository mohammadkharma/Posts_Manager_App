const initState = {
    posts: [
        { id: '1', title: 'xxxx', content: 'yyyyyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyyyyy yyyyyyyyyyyyyyyy' },
        { id: '2', title: 'xxxx', content: 'yyyyyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyyyyy yyyyyyyyyyyyyyyy' },
        { id: '3', title: 'xxxx', content: 'yyyyyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyyyyy yyyyyyyyyyyyyyyy' }
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            return state;
        case 'CREATE_POST_ERR':
            console.log('created post error', action.err)
            return state;
        default:
            return state;
    }
}

export default postReducer;