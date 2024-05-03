"use client";

import { useSelector } from "react-redux";
import Login from "../auth/login/page";
import Register from "../auth/register/page";

function MoviReg() {
  const { user } = useSelector((store: any) => store.auth);
  if (!user) {
    return <Login /> || <Register />;
  }
  return <div>MoviReg</div>;
}

export default MoviReg;
