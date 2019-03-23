export const signIn = (credentials) => {
return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase;
    //the below request makes use of the firebase auth function which takes time so it returns a promis
    //so we make use of the then method which takes in a callback function as param
    //also we can catch for any errors which also takes a callback function
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err}) 
    })
}
}