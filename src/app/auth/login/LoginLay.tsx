"use client";

interface user {
  email: string;
  name: string;
  id: string;
  roles: string;
  password: string;
}

import Button from "@/components/Button";
import Input from "@/components/Input";
import { userGetLogin } from "@/function/userGetLogin";
import { getUs } from "@/redux/funcs/auth/authSlice";
import { MutableRefObject, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function LoginLay() {
  const dispatch = useDispatch();
  const { user } = useSelector((store: any) => store.auth);
  const email: HTMLInputElement | MutableRefObject<any> = useRef();
  const password: HTMLInputElement | MutableRefObject<any> = useRef();

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    if (email.current.value.trim().length >= 1) {
      if (password.current.value.trim().length >= 4) {
        userGetLogin(email.current.value, password.current.value).then(
          (data: user) => {
            dispatch(getUs(data));
            toast.success(`xush kelibsiz ${data.name}`);
          }
        );
      } else {
        toast.error("password uzunligi kamida 4ta bolishi kerak");
      }
    } else {
      toast.error("Xatolik emailni yozmadingiz!");
    }
  };

  if (user) {
    return (
      <div className=" flex items-center  justify-center mt-[20%]">
        <a className="btn btn-outline btn-primary link-hover" href="/">
          Refresh pages
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center my-[30px] p-2  sm:p-5">
      <h2 className="text-[20px] sm:text-2xl font-bold underline ">Login</h2>
      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col w-full sm:w-[500px] gap-5"
      >
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
        <Button name="Login" cls="btn-outline link-hover" />
      </form>
    </div>
  );
}

export default LoginLay;
