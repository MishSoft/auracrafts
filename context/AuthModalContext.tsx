"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AuthModalContextType {
  visible: boolean;
  open: () => void;
  close: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined
);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <AuthModalContext.Provider value={{ visible, open, close }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return context;
}
