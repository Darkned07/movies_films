"use client";

import { useSelector } from "react-redux";
import Login from "../auth/login/page";

function AboutPage() {
  const { user } = useSelector((store: any) => store.auth);
  if (!user) {
    return <Login />;
  }
  return <div>AboutPage</div>;
}

export default AboutPage;
