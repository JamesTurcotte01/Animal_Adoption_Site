import React from 'react';
import AllAnimals from './All';



const Views = (props) => {
    return(
        <div>
            <AllAnimals path = '/api/animals'/>
        </div>
    )
}
export default Views;