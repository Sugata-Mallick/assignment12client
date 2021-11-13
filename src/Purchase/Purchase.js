import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const { register, handleSubmit, reset } = useForm()

    const { exploreId } = useParams()
    const history=useHistory();
    const onSubmit = data => {
       
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
        fetch(`https://pacific-hollows-59119.herokuapp.com/explore/${exploreId}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    return (
        <div>
           <div>
               <h2 className="m-3 text-success border border-3 border-success w-25 mx-auto p-3 rounded-3 container">Purchase Page</h2>
            <h3 className="m-3 text-primary">Purchase Product-Id : {exploreId}</h3>
            {/* <h2>This is:{exploreId.name}</h2>
            <img width="25%" src={purchase?.img} alt="" />
            <p ><h2 className="bold">Description:</h2>{purchase.desciption}</p> */}
             <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input className="border border-3 border-info p-2" {...register("name", { required: true, maxLength: 80 })} placeholder="name" />
                <br />
                <input className=" border border-3 border-info p-2"  {...register("email")} placeholder="email" />
                <br />
                <input className=" border border-3 border-info p-2" {...register("address")} placeholder="address" />
                <br />
                <input className=" border border-3 border-info p-2" type="number" {...register("price")} placeholder="price" />
                <br />
                <input className=" border border-3 border-info p-2" {...register("img")} placeholder="img" />
                <br />
                {/* <input className="" type="book" /> */}
                <input type="submit" className="btn btn-primary text-white m-2" value="Submit" />
                <Link to='/addService'></Link>
            </form>
        </div>
        </div>
    );
};

export default Purchase;