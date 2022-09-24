// npm
import { useContext } from "react";
import { PackageContext } from "../contexts/PackageContext";

export default function usePackageContext() {
  const context = useContext(PackageContext);

  if (!context) {
    throw new Error(
      "Please make sure the Package Provider wraps its child compoennets"
    );
  }
  return context;
}
