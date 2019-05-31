import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className='card.z-depth-0'>
                <div className='card-content'>
                    <span className="card-title">Project Title-- {id}</span>
                    <p>Fayyaz Ali Khan</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Post By Fayyaz</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    )
}
