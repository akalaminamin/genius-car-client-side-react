import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Addservice.css";

const AddService = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("https://shielded-mountain-53480.herokuapp.com/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service succesfully added")
                    reset();
                }
            })
    }
    return (
        <div className="addService">
            <h2>Please Add your services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    {...register("Name", { required: true, maxLength: 20 })}
                />
                <textarea placeholder="Description" {...register("desc")} />
                <input type="number" placeholder="Price" {...register("price")} />
                <input placeholder="img url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
