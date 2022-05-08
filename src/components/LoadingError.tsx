import RetryLink from "./RetryLink";

export default function LoadingError({ name, retry }: { name: string, retry: () => any }) {
  return <div style={{ padding: "3px" }}>Error loading {name}. <RetryLink onClick={retry} /></div>
}
