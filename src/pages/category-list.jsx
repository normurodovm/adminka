import React from "react";
import { userCategoryList } from "../service/query/userCategoryList";
import { CategoryCard } from "../components/category-card";
import { Search } from "../components/search";
import { useNavigate } from "react-router-dom";

export const CategoryList = () => {
  const { data } = userCategoryList();
  const navigate = useNavigate()
  const click = () => {
    navigate("/create-category")
  }
  return (
    <div>
      <div className="flex justify-between bg-white px-[25px] py-[30px] border-b">
        <h2 className="font-extrabold text-[#212121] text-[18px]">Все категория </h2>
        <div>
        <button className="px-5 py-2 bg-green-500 text-white font-medium rounded-lg" onClick={click}> + Новый категория </button>
        </div>
        <Search/>
      </div>
      {data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};
