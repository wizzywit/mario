import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

function ProjectDetails(props) {
    console.log(props)
    const { project } = props
    if (project) {
        return (
    <div className="container section project-details">
    <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>3rd September, 3am</div>
        </div>
    </div>
    </div>
        )
    } else {
  return (
      <div className="container center">

      </div>
    
  )
}
}
//note: in the mapstatetoprops function we dont have direct access to props exccept
//passed in as a params ownProps with the state
const mapStateToProps = (state,ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose (
    connect(mapStateToProps,),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails)
