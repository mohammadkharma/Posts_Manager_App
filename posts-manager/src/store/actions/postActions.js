export const createPost = post => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post,
            authFirstName: 'VVV',
            authLastName: 'SSSSS',
            authId: 12345,
            createdAt: new Date()
        }).then(post => {
            dispatch({type: 'CREATE_POST', post })
        }).catch(err => {
            dispatch({type: 'CREATE_POST_ERR', err })
        })
        
    }
}