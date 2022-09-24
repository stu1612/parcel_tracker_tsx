// npm
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useQuery() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "Please wrap AppContextProvider around its child components"
    );
  }
  return context;
}
