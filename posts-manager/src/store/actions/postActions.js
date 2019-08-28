export const createPost = post => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            authFirstName: profile.firstName,
            authLastName: profile.lastName,
            authId: authId,
            createdAt: new Date()
        }).then(post => {
            dispatch({type: 'CREATE_POST', post })
        }).catch(err => {
            dispatch({type: 'CREATE_POST_ERR', err })
        })
        
    }
}