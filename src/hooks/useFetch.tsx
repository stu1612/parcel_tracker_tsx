// npm
import { useState, useEffect } from "react";

// files
import iPackage from "../interfaces/iPackage";

export default function useFetch(url: string) {
  const [data, setData] = useState(Array<iPackage>());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string | null>(null);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) {
      return;
    }

    const fetchRequest = async () => {
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
    };

    fetchRequest();

    return () => {
      cancelRequest = true;
    };
  }, [url]);

  return { data, loading, error };
}
