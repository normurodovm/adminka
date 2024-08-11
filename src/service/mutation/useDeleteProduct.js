import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteProduct = () => {
    const client = useQueryClient()
    return useMutation({
        mutationFn:(id)=>request.delete(`/products/${id}`).then((res)=>res.data),
        onSuccess:()=>{
            client.invalidateQueries(["product-list"])
            console.log(id);
        }
    })
}