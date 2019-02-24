
export const  createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make some asyc call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Wisdom',
            authorLastName: 'Praise',
            authorId: 12345,
            createAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
}