type DataFetchProps = {
  status: "success" | "loading" | "error";
};

export default function DataFetch({ status }: DataFetchProps) {
  if (status === "loading") {
    return <h2>Data is loading...</h2>;
  } else if (status === "error") {
    return <h2>ERROR: Data could not fetched</h2>;
  }
  return (
    <div>
      <h2>Data fetched successfully</h2>
    </div>
  );
}
