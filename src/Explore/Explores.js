import React, { useEffect, useState } from 'react';
import Explore from './Explore';

const Explores = () => {
    const [explores, setExplores] = useState([])
    useEffect(() => {
        fetch('https://pacific-hollows-59119.herokuapp.com/explore')

            .then(res => res.json())
            .then(data => setExplores(data));
    }, [])
    return (
        <div>
             <div id="services">
            <h2 className="text-primary m-4 text-success">Our Cars</h2>
            <div className="service-container">
                {
                    explores.map(explore => <Explore
                        key={explore.id}
                        explore={explore}
                    ></Explore>)
                }
          
            </div>
        </div>
        </div>
    );
};

export default Explores;