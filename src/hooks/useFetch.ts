import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useFetch<T>(fetch: () => Promise<T>): [T | undefined | null, () => void] {
  const [data, setData] = useState<T | null>();
  const router = useRouter();

  useEffect(() => {
    if (data !== undefined)
      return;
    if (!router.isReady)
      return;
    fetch().then(x => setData(x)).catch(_ => setData(null));
  }, [data, router.isReady, fetch])

  return [data, () => setData(undefined)]
}