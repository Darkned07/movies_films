import toast from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";
import { error } from "console";
interface inter {
  email: string;
  name: string;
  password: string;
  id: string;
  roles: string;
}

const userPostRegister = async (
  name: string,
  email: string,
  password: string
) => {
  const post = async () => {
    const req = await fetch("http://localhost:9999/users");
    const data = await req.json();
    return data;
  };
  const data = await post();
  const userPost = async (url: string, doc: inter) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doc),
    });
    return await res.json();
  };
  const emx = data.find((s: inter) => s.email === email);
  if (!emx) {
    return userPost("http://localhost:9999/users", {
      name: name,
      id: nanoid(),
      email: email,
      password: password,
      roles: "user",
    })
      .then((data) => {
        toast.success("Ro'yxatdan o'tdingiz");
        return data;
      })
      .catch((error) => {
        toast.error("Serverda xatolik yuz berdi. qaytadan urunib ko'ring!");
        console.log(error);
      });
  } else {
    toast.error("Email avval ro'yxatdan o'tgan! boshqa emaildan foydalaning!");
  }
};

export { userPostRegister };
