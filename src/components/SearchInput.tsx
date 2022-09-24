interface searchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ onChange, query }: searchProps) {
  return (
    <form>
      <input
        type="string"
        id="query"
        value={query}
        onChange={onChange}
        placeholder="Search Package ID"
      />
    </form>
  );
}
