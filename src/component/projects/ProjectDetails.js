import React from 'react'

function ProjectDetails(props) {
    console.log(props)
    const id= props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rerum, dolorum eos laborum porro quasi beatae quas tempore recusandae similique corporis, iusto assumenda odio quo necessitatibus architecto commodi velit vel?</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by wisdom</div>
                <div>3rd September, 3am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
