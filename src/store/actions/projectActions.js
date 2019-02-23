
export const  createProject = (project) => {
    return (dispatch, getState) => {
        //make some asyc call to database
        dispatch({ type: 'CREATE_PROJECT', project })
    }
}