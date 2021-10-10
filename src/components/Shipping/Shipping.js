import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="float">
            <div>
                <form placeholder="Name" className="shipping-from" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input placeholder="Emali" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="Zip code" defaultValue="" {...register("zip_code")} />
                    <input placeholder="Phone Number" defaultValue="" {...register("phone_num")} />
                    <input className="btn-regular" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;