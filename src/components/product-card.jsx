import React from "react";
import { DeleteIcon } from "../icons/delete-icon";
import { EditIcon } from "../icons/edit-icon";
import { useDeleteProduct } from "../service/mutation/useDeleteProduct";
import { useNavigate } from "react-router-dom";



export const ProductCard = ({ id, name, img, price, categoryId }) => {
  const navigate = useNavigate()
  const click = () => {
    navigate(`/edit-product/${id}`)
  }
  const {reset,mutate} = useDeleteProduct();
  const handleDeleteProduct = () => {
    mutate(id, {
      onSuccess: () => {
        reset(); 
      },
      onError: () => {
       
      }
    });
  };

  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div className="">
        <img src={img} alt="img" />
        <h2>{name}</h2>
        <strong>{price}</strong>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={click}><EditIcon/></button>
        <button onClick={handleDeleteProduct}><DeleteIcon/></button>
      </div>
    </div>
  );
};
