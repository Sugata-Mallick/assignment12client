import React, { useEffect, useState } from 'react';
import './AddServices.css';
import { Link } from 'react-router-dom';


const AddServices = ({ order }) => {
    // const {service} = props;
    const { _id, email,name, price, desciption, img } = order;

    //         const [orders, setOrders]=useState([])
    
    //     useEffect(()=> {
    // fetch(`https://gruesome-beast-09628.herokuapp.com/orders`)
    // .then(res => res.json())
    // .then(data => setOrders(data));
    //     }, [])
    //     const handleDelete = id => {
    //         const url = `https://gruesome-beast-09628.herokuapp.com/dltOrders/${id}`
    //         fetch(url, {
    //             method:'DELETE'
    //         })
    //         .then(res=> res.json())
    //         .then(data =>
    //              {console.log(data)
    //         if(data.deletedCount > 0){
    //             alert('deleted')
    //             const remaining = orders.filter(order => order._id !== id);
    //             setOrders(remaining)
    //         }
    //     })
    //     }
    return (
        <div className=" pb-3">
            <img className="w-25" src={img} alt="" />
            <h6>{name}</h6>
            <h6>{email}</h6>
            <h6>price:${price}</h6>
            <h6 className="px-3">{desciption}</h6>
            <Link to={`/addService/${_id}`}>
            {/* <button onClick={() => handleDelete(order._id)}>DELETE</button> */}
            </Link>
        </div>
    );
    //id = _id
};

export default AddServices;