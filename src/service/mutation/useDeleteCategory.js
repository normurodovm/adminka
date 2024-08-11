
import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteCategory = () => {
  const client = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => request.delete(`/category/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["category-list"]);
    },
  });
};
