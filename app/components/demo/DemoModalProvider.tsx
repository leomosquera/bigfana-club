"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import DemoModal from "@/app/components/demo/DemoModal";

type DemoModalContextValue = {
  openDemoModal: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal(): DemoModalContextValue {
  const context = useContext(DemoModalContext);

  if (!context) {
    throw new Error("useDemoModal must be used within DemoModalProvider");
  }

  return context;
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDemoModal = useCallback(() => setOpen(true), []);
  const closeDemoModal = useCallback(() => setOpen(false), []);

  return (
    <DemoModalContext.Provider value={{ openDemoModal }}>
      {children}
      <DemoModal open={open} onClose={closeDemoModal} />
    </DemoModalContext.Provider>
  );
}
