// npm
import { useState, createContext } from "react";

type childrenProps = {
  children: React.ReactNode;
};

interface iQuery {
  query: string;
  queryChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AppContext = createContext<iQuery | null>(null);

export default function AppContextProvider({ children }: childrenProps) {
  // local state
  const [query, setQuery] = useState("");

  // methods
  const queryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <AppContext.Provider value={{ query, queryChangeHandler }}>
      {children}
    </AppContext.Provider>
  );
}
