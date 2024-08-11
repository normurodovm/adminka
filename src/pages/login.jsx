import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../service/mutation/useLogin";
import * as z from "zod";
import { saveState } from "../config/storage";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(3, "Please enter a valid value"),
  password: z
    .string(2)
    .min(3, "eng kam qiymat 3ta")
    .max(4, "eng ko'p qiymat 4 ta"),
});

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] bg-white p-[65px] rounded-sm">
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <input
              placeholder="Email"
              className="w-full p-5"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              placeholder="Password"
              className="w-full p-5"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button className="block w-full p-5 text-center text-white bg-[#5B5CE2]">
            LOG IN  
          </button>
        </form>
      </div>
    </div>
  );
};
