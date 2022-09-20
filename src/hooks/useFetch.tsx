// npm
import { useState, useEffect } from "react";

// files
import iPackage from "../interfaces/iPackage";

export default function useFetch(url: string) {
  const [data, setData] = useState(Array<iPackage>());
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchURL(url: string) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    }
    fetchURL(url);
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
