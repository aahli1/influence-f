// src/components/ClientProvider.tsx
"use client"; // This file will only run on the client side

import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
