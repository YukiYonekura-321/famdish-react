"use client";

import { createContext, useContext } from "react";

const FooContext = createContext();

export const FooProvider = ({ children }) => {
  const foo = "bar";
  const bar = "baz";
  const baz = 123;
  
  return (
    <FooContext.Provider value={{ foo, bar, baz }}>
      {children}
    </FooContext.Provider>
  );
};

export const useFoo = () => useContext(FooContext);