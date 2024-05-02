"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { MutableRefObject, useRef } from "react";
import { userPostRegister } from "@/function/userPostRegister";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getUs, getUser } from "@/redux/funcs/auth/authSlice";

function RegisterLay() {
  const dispatch = useDispatch();
  const name: HTMLInputElement | MutableRefObject<any> = useRef();
  const email: HTMLInputElement | MutableRefObject<any> = useRef();
  const password: HTMLInputElement | MutableRefObject<any> = useRef();

  const use = async () => {
    const req = await fetch("http://localhost:9999/users");
    const data = await req.json();
    dispatch(getUser(data));
  };
  use();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.current.value.trim().length >= 5) {
      if (email.current.value.trim().length >= 1) {
        if (password.current.value.trim().length >= 4) {
          userPostRegister(
            name.current.value,
            email.current.value,
            password.current.value
          ).then((data) => {
            dispatch(getUs(data));
          });
        } else {
          toast.error(
            "password kamida 4ta son yoki harfdan iborat bolishi kerak!"
          );
        }
      } else {
        toast.error("emailni yozmadingiz");
      }
    } else {
      toast.error("Name kamida 5ta so'zdan iboarat bolishi kerak");
    }
  };

  return (
    <div className="flex flex-col items-center my-[30px] p-2  sm:p-5">
      <h2 className="text-[20px] sm:text-2xl font-bold underline ">
        Ro'yxatdan o'tish
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:w-[500px] gap-5"
      >
        <Input
          usrf={name}
          labelName="Name"
          type="text"
          placeholder="name writing..."
        />
        <Input
          usrf={email}
          labelName="Email"
          type="email"
          placeholder="email writing..."
        />
        <Input
          usrf={password}
          labelName="Password"
          type="password"
          placeholder="password writing..."
        />
        <Button name="Sign up" cls="btn-outline link-hover" />
      </form>
    </div>
  );
}

export default RegisterLay;
