import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-island-49422.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service m-5">
            <h2 className="my-5">Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title",)}
                    placeholder="Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Img Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;