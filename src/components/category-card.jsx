import React from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "../icons/edit-icon";
import { DeleteIcon } from "../icons/delete-icon";
import { useDeleteCategory } from "../service/mutation/useDeleteCategory";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  const deleteCategory = useDeleteCategory();
  const handleDelete = () => {
    deleteCategory.mutate(id);
  };

  return (
    <div className="flex items-center justify-between p-6 shadow-md bg-white border-b">
      <div className="flex items-center gap-44">
        <img className="w-[150px]" src={img} alt="img" />
        <h2 className="font-extrabold text-[#212121] text-[18px]">категория {id}</h2>
        <h2 className="font-serif text-[16px]">{name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="bg-[#F7F7FF] text-[#5B5CE2] px-2 py-2 rounded-md"
        >
          show
        </button>
        <button onClick={navigate(`/edit-category/${id}`)}><EditIcon/></button>
        <button onClick={handleDelete}><DeleteIcon/></button>
      </div>
    </div>
  );
};
