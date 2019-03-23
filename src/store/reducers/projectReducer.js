const initState = {
    
     projects: [
        {id: '1', title: 'help me find zoe', content: 'blah blah blah'},
        {id: '2', title: 'this is me talking', content: 'blah blah blah'},
        {id: '3', title: 'hurray this is wisdom', content: 'blah blah blah'},
    ]

};

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
        return state

        case 'CREATE_PROJECT_ERROR':
        console.log('create project error' , action.err)
        return state

        default: return state
    }
}

export default projectReducer