import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="w-75" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="" />
           <br/> <Link  to="/"><button className="btn btn-warning">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;