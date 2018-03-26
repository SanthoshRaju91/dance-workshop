import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Workshop from './workshop-card';

const Workshops = ({ data: { workshops = [] }}) => {
    return (        
        <div className="workshops-container">
            <h1>Upcoming Workshops</h1>            

            <div className="row">                
                { workshops.map((current, index) => (
                    <div className="col-md-3" key={index}>
                        <Workshop { ...current }/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default graphql(gql`
    query workshops {
        workshops: getAllWorkshops {
          id
          name
          description
        }
      }
`)(Workshops);