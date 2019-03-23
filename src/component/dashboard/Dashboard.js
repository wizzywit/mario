import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    
    
    render () {
        console.log(this.props);
        const { projects } = this.props //destructuring 
        if (projects) {
            return (
                <div className="dashbord container">
                    <div className="row">
                        <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                        <Notifications />
                        </div>
                    </div>
    
                </div>
            )
        } else {
        return (
            <div className="dashbord container">
                <div className="row">
                    <div className="col s12 m6">
                    <p className="white-text">Loading Projects...</p>
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <Notifications />
                    </div>
                </div>

            </div>
        )
        }
    }

}

const mapStateToProps = (state) => {
    
    return {
        projects: state.firestore.ordered.projects
    }
}

// export default compose (connect(
//     mapStateToProps
// ), firestoreConnect(['projects'
// ]))(Dashboard);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)

// export default connect(mapStateToProps)(Dashboard)

