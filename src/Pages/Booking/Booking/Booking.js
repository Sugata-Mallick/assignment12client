import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const [bookingDetail, setBookingDetail] = useState({})
    const { register, handleSubmit, reset } = useForm()

    const { serviceId } = useParams()
    const history=useHistory();
    const onSubmit = data => {
        // const savedCart = getStoredCard();
        // data.order = savedCart;

        // fetch(`https://gruesome-beast-09628.herokuapp.com/services/${serviceId}`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())

        console.log(data)
        axios.post(`https://pacific-hollows-59119.herokuapp.com/addOrders`, data)
            .then(res => {
                if (res.data.insertedId) {
history.push('/addService')
                    reset()
                }
                console.log(res)
            })
    };
    useEffect(() => {
        fetch(`https://pacific-hollows-59119.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setBookingDetail(data))
    }, [])
    return (
        <div>
           <h3 className="m- 1text-success border border-3 border-success w-25 mx-auto p-1 rounded-3 container">Order Page</h3>
            <h5 className="text-success"> Product's Order-Id : {serviceId}</h5>
            <h5 >This is:{bookingDetail.name}</h5>
            <img width="15%" src={bookingDetail?.img} alt="" />
            <h5>Description:<h6>{bookingDetail.desciption}</h6></h5>
            <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input  className="border border-3 border-success p-2" {...register("name", { required: true, maxLength: 80 })} placeholder="name" />
                <br />
                <input  className="border border-3 border-success p-2" {...register("email")} placeholder="email" />
                <br />
                <input className="border border-3 border-success p-2" {...register("desciption")} placeholder="desciption" />
                <br />
                <input  className="border border-3 border-success p-2" type="number" {...register("price")} placeholder="price" />
                <br />
                <input className="border border-3 border-success p-2" {...register("img")} placeholder="img" />
                <br />
                {/* <input className="" type="book" /> */}
                <input className="btn btn-success text-white m-2" type="submit" value="Submit" />
                <Link to='/addService'></Link>
            </form>
        </div>
    );
};

export default Booking;