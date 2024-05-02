"use client";
import { store } from "@/redux/app";
import { Provider } from "react-redux";

function RootRedux({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

export default RootRedux;
