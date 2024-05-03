"use client";

import { useSelector } from "react-redux";
import Login from "../auth/login/page";

function ContactRegs() {
  const { user } = useSelector((store: any) => store.auth);
  if (!user) {
    return <Login />;
  }
  return <div>ContactRegs</div>;
}

export default ContactRegs;
