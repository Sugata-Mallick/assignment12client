
import React, { useEffect, useState } from 'react';

import ManageServices from './ManageServices';


const ManageService = () => {

    const [orders, setOrders] = useState([])

    const [error, setError ] = useState(false)
    useEffect(() => {
        fetch("https://pacific-hollows-59119.herokuapp.com/orders")
            .then(res => res.json())
            .then(result => setOrders(result) )

            .catch(err => setError(true))
    }, [])


    return (
        <div>
            <h2 className="text-primary mt-5">Manage Orders</h2>
            <div className="order-container">
                {
                    orders.map(order => <ManageServices
                    key={order.id}
                     order={order}
                    >
            
                    </ManageServices>)

                }
                
            </div>
        </div>
    );
};

export default ManageService;