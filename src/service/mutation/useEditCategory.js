import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { useQueryClient } from "@tanstack/react-query";

export const useEditCategory = () => {
  const client = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }) => request.put(`/category/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["category-list"]);
    }
  });
};
