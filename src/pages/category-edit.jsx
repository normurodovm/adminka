import { useForm } from "react-hook-form";
import { useEditCategory } from "../service/mutation/useEditcategory";
import { useParams, useNavigate } from "react-router-dom";

export const EditCategory = () => {
  const { id } = useParams();
  const { mutate, isPending } = useEditCategory();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = (formData) => {
    mutate({ id, data: formData }, {
      onSuccess: () => {
        console.log("Edit success");
        reset();
        navigate("/category-list");
      },
    });
  };

  return (
    <div  className="bg-white px-10 py-10 max-w-[600px] text-center rounded-3xl mx-auto mt-5">
      <form onSubmit={handleSubmit(submit)}>
        <div>
            <input className="bg-[#F6F6FB] px-3 py-3 rounded-xl border  mb-4 w-[400px]"  {...register("name")} type="text" placeholder="Category Name" />
        </div>
        <div>
            <input className="bg-[#F6F6FB] px-3 py-3 rounded-xl border  mb-4 w-[400px]"  {...register("img")} type="text" placeholder="Image URL" />
        </div>
        <div>
            <button className="w-[400px] bg-green-500 py-3 text-[18px] text-white font-bold rounded-lg" type="submit" disabled={isPending}>Send</button>
        </div>
      </form>
    </div>
  );
};
