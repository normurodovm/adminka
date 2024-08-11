import { useMutation } from "@tanstack/react-query"
import { request } from "../../config/request"
import { useQueryClient } from "@tanstack/react-query"


export const useCreateCategory = () => {
    const client = useQueryClient() 
    return useMutation({
        mutationFn:(data) => request.post("/category",data).then((res) => res.data),
        onSuccess:()=>{
            client.invalidateQueries(["category-list"])
        }
    })
}