// npm
import { createContext, useState, useEffect } from "react";

import iPackage from "../interfaces/iPackage";

type StatusProps = {
  children: React.ReactNode;
};

interface PackageProps {
  data: iPackage[];
  loading: boolean;
  error: boolean | string | null;
}

export const PackageContext = createContext<PackageProps | null>(null);

export default function PackageProvider({ children }: StatusProps) {
  const [data, setData] = useState<iPackage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string | null>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      let cancelRequest = false;
      if (!url) {
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw res;
        }
        const json = await res.json();
        if (!cancelRequest) {
          setData(json);
          setLoading(false);
          setError(null);
        }
      } catch (err) {
        if (!cancelRequest) {
          if (err instanceof Error) {
            setError(err.message);
            setLoading(false);
          }
        }
      }
      return () => {
        cancelRequest = true;
      };
    };
    // fetchData("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840");
  }, []);

  return (
    <PackageContext.Provider value={{ data, loading, error }}>
      {children}
    </PackageContext.Provider>
  );
}
