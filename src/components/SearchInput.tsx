// files
import useQuery from "../hooks/useQuery";

export default function SearchInput() {
  const { query, queryChangeHandler } = useQuery();
  return (
    <form>
      <input
        type="string"
        id="query"
        value={query}
        onChange={queryChangeHandler}
        placeholder="Search Package ID"
      />
    </form>
  );
}
