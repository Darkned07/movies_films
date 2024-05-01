import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

function RegisterLay() {
  return (
    <div className="flex flex-col items-center my-[30px] p-2  sm:p-5">
      <h2 className="text-[20px] sm:text-2xl font-bold underline ">
        Ro'yxatdan o'tish
      </h2>
      <form className="flex flex-col w-full sm:w-[500px] gap-5">
        <Input labelName="Name" type="text" placeholder="name writing..." />
        <Input labelName="Email" type="email" placeholder="email writing..." />
        <Input
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
