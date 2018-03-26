import React from 'react';

const WorkshopCard = props => (
    <div className="card">
        <img className="card-img-top" src="https://img00.deviantart.net/81fc/i/2011/241/2/9/dance_workshop_by_poisonedhamster-d489anj.jpg"/>
        <div className="card-body">
            <h5 className="title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
        </div>
    </div>
)

export default WorkshopCard;