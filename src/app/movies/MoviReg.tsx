"use client";

import { useSelector } from "react-redux";
import Login from "../auth/login/page";

function MoviReg() {
  const { user } = useSelector((store: any) => store.auth);
  if (!user) {
    return <Login />;
  }
  return <div>MoviReg</div>;
}

export default MoviReg;
