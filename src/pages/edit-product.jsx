import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditProduct } from '../service/mutation/useEditProduct';

export const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Parametrlardan id ni olish
    const { register, handleSubmit, reset } = useForm();
    const { mutate, isPending } = useEditProduct(); // Hookni chaqirish

    const submit = (formData) => {
        if (id) {
            mutate({ id, data: formData }, {
                onSuccess: () => {
                    console.log(`Mahsulot yangilandi: ${id}`);
                    reset(); 
                    navigate(`/category-product${id}`); 
                },
                onError: (error) => {
                    console.error("Mahsulotni yangilashda xato:", error);
                },
            });
        } else {
            console.error("ID aniqlanmadi");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input {...register("name")} type="text" placeholder="Mahsulot nomi" />
                <input {...register("img")} type="text" placeholder="Mahsulot surati" />
                <button type="submit" disabled={isPending}>Submit</button>
            </form>
        </div>
    );
};
