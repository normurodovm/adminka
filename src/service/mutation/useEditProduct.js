import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useEditProduct = () => {
    const client = useQueryClient();
    const { id } = useParams(); // useParams orqali id ni olish
    
    return useMutation({
        mutationFn: ({ id, data }) => request.put(`/products/${id}`, data).then((res) => res.data), // Ma'lumotlarni uzatish
        onSuccess: () => {
            client.invalidateQueries(["product-list"]); // product-list ni invalidate qilish
        },
    });
};
