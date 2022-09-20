// files
import useFetch from "./hooks/useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );
  console.log(data);
  return <div className="App">hello react</div>;
}
