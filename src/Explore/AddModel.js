
import Button from '@restart/ui/esm/Button';
import axios from 'axios';
 import React from 'react';
 import { useForm } from "react-hook-form";
import { Link, NavLink } from 'react-router-dom';

const AddModel = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://pacific-hollows-59119.herokuapp.com/explore', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
    }

    return (
        <div>
        <div className="add-service">
        <h2>Add-Model</h2>
        <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input  className="border border-3 border-success p-2" {...register("name", { required: true, maxLength: 80 })} placeholder="name" />
                <br />
                <input  className="border border-3 border-success p-2" {...register("email")} placeholder="email" />
                <br />
                <input className="border border-3 border-success p-2" {...register("address")} placeholder="address" />
                <br />
                <input  className="border border-3 border-success p-2" type="number" {...register("price")} placeholder="price" />
                <br />
                <input className="border border-3 border-success p-2" {...register("img")} placeholder="img" />
                <br />
             
                <input className="btn btn-success text-white m-2" type="submit" value="Submit" />
                {/* <Link to='/explore'></Link> */}
                
            {/* <NavLink style={{textDecoration:"none"}} to={'/explore'}>  <Button className="btn btn-warning"> Explore</Button></NavLink> */}
                </form>
    </div>
   </div>
    );

    }

export default AddModel;

 