import React, { useEffect, useState } from 'react';
// import './AddServices.css';
import { Link } from 'react-router-dom';


const ManageServices = ({ order }) => {
    // const {service} = props;
    const { _id, email,name, price, address, img } = order;

            const [orders, setOrders]=useState([])
    
        useEffect(()=> {
    fetch(`https://pacific-hollows-59119.herokuapp.com/orders`)
    .then(res => res.json())
    .then(data => setOrders(data));
    
        }, [])
        const handleDelete = id => {
            const url = `https://pacific-hollows-59119.herokuapp.com/dltOrders/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data =>
                 {console.log(data)
            if(data.deletedCount > 0){
                alert('deleted')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            }
        })
        }
    return (
        <div className=" pb-3">
            <img width="15%" src={img} alt="" />
            <h6>{name}</h6>
            <h6>{email}</h6>
            <h6>price: {price}</h6>
            <h6 className="px-3">{address}</h6>
            <Link to={`/addService/${_id}`}>
            <button className="btn btn-danger text-white p-1" onClick={() => handleDelete(order._id)}>DELETE</button>
            </Link>
        </div>
    );
    //id = _id
};

export default ManageServices;