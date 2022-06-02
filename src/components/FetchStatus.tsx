import Card from "./Card";
import { Loading } from "./Loading";
import LoadingRing from "./LoadingRing";
import LoadingError from "./LoadingError";

export default function FetchStatus({ data, name, retry, page, card }: { data: any, name: string, retry: () => any, page?: boolean, card?: boolean }) {
  if (data)
    return <></>

  const result = <>
    {data === undefined && (page ? <div><LoadingRing /></div> : <Loading />)}
    {data === null && <LoadingError name={name} retry={retry} />}
  </>;

  if (card || (page && data === null))
    return <Card>{result}</Card>

  return result;
}
