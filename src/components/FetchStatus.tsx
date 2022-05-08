import Card from "./Card";
import { Loading } from "./Loading";
import LoadingError from "./LoadingError";

export default function FetchStatus({ data, name, retry, card }: { data: any, name: string, retry: () => any, card?: boolean }) {
  if (data)
    return <></>

  const result = <>
    {data === undefined && <Loading />}
    {data === null && <LoadingError name={name} retry={retry} />}
  </>;

  if (card)
    return <Card>{result}</Card>

  return result;
}
