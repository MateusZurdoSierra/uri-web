"use client";

import { createContext, MutableRefObject, useContext, useRef } from "react";

type ScrollContextType = MutableRefObject<null> | null;

const ScrollContext = createContext<ScrollContextType>(null);

export const ScrollProvider = ({ children }: any) => {
  const formRef = useRef(null);

  return (
    //@ts-ignore
    <ScrollContext.Provider value={{ formRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
