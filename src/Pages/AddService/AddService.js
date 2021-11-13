// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import './AddService.css'

// const AddService = () => {
//     const { register, handleSubmit, reset} = useForm();
//     const onSubmit = data =>
//     {console.log(data);
//     axios.post('https://gruesome-beast-09628.herokuapp.com/services', data)
//     .then(res =>{
//         if(res.data.insertedId){
//             alert('added successfully');
//             reset();
//         }
//     })
// }
//     return (
//         <div className="addservice">
//             <h1>add a sevice</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="name"/>
//       <textarea type="text" {...register("description")} placeholder="description" />
//       <input type="number" {...register("price")} placeholder="price" />
//       <input {...register("img")} placeholder="image url" />
//       <input type="submit" />
//     </form>
//         </div>
//     );
// };

// export default AddService;

import './AddService.css'
import React, { useEffect, useState } from 'react';
import AddServices from '../../AddServices/AddServices';
// import Booking from '../Booking/Booking/Booking';

const AddService = () => {

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
            <h2 className="text-primary mt-5">Our orders</h2>
            <div className="order-container">
                {
                    orders.map(order => <AddServices
                    key={order.id}
                     order={order}
                    >
            
                    </AddServices>)

                }
                
            </div>
        </div>
    );
};

export default AddService;