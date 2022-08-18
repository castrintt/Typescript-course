import { createContext, ReactNode, useState } from "react";
type UserContextProps = {
  children: ReactNode;
};

type LanguagesTypes<T> = {
  languages: string;
  setLanguages: (newState: T) => void;
};

const initialValue = {
  languages: "",
  setLanguages: () => {},
};

export const UserContext = createContext<LanguagesTypes<string>>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [languages, setLanguages] = useState(initialValue.languages);

  return (
    <UserContext.Provider value={{ languages, setLanguages }}>
      {children}
    </UserContext.Provider>
  );
};
