import { useForm } from "react-hook-form"
import { useCreateCategory } from "../service/mutation/useCreatecategory"
import { useNavigate } from "react-router-dom"


export const CrateCategory = () => {
    const {register,reset,handleSubmit} = useForm()
    const {mutate,isPending} = useCreateCategory()
    const navigate = useNavigate()
    const submit = (data) => {
        mutate(data,{
            onSuccess:()=>{
                console.log("succes");
            }
        })
        reset()
        navigate("/category-list")
    }

    return<>
    <div className="bg-white px-10 py-10 max-w-[600px] text-center rounded-3xl mx-auto mt-5">
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input className="bg-[#F6F6FB] px-3 py-3 rounded-xl border  mb-4 w-[400px]" placeholder="Enter category name" {...register("name")} type="text" />
            </div>
            <div>
                <input  className="bg-[#F6F6FB] px-3 py-3 rounded-xl border mb-4 w-[400px]" placeholder="Enter category img url" {...register("img")} type="text" />
            </div>
            <div>
                <button className="w-[400px] bg-green-500 py-3 text-[18px] text-white font-bold rounded-lg"  type="submit">Save</button>
            </div>
            
        </form>
        </div>
    </>
}